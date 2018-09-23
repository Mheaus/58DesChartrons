import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Rehipe from 'rehype-react'

import { AmenitiesExcerpt, Contact, Overlay } from '../index'
import { Close } from '../../assets/icons'

const renderAst = new Rehipe({
  createElement: React.createElement,
}).Compiler

class Flat extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isAmenitiesVisible: false,
      isBannerVisible: true,
      isOverlayVisible: false,
    }
  }

  componentDidMount() {
    document.querySelector('.flat').onscroll = event => {
      const { isBannerVisible } = this.state

      if (event.target.scrollTop > 640 && isBannerVisible) {
        return this.setState({ isBannerVisible: false })
      }

      if (event.target.scrollTop < 640 && !isBannerVisible) {
        return this.setState({ isBannerVisible: true })
      }

      return null
    }
  }

  toggleAnemities = () =>
    this.setState(prevState => ({
      isAmenitiesVisible: !prevState.isAmenitiesVisible,
    }))

  render() {
    const { amenities, className, flat, rooms } = this.props
    const { isAmenitiesVisible, isOverlayVisible, isBannerVisible } = this.state
    const defaultImageUrl = flat.cover.childImageSharp.original.src

    return (
      <div
        className={`flat ${className}${
          isOverlayVisible ? ' flat--covered' : ''
        }${isBannerVisible ? ' flat--banner-visible' : ''}${
          isAmenitiesVisible ? ' flat--locked' : ''
        }`}
      >
        <div
          className="flat__background"
          style={{ backgroundImage: `url(${defaultImageUrl})` }}
        />

        <button
          className="button-open"
          type="button"
          onClick={() => this.setState({ isOverlayVisible: true })}
        >
          voir les photos
        </button>

        <Overlay
          className={`flat__overlay ${
            isOverlayVisible ? 'overlay--visible' : ''
          }`}
          defaultImageUrl={defaultImageUrl}
          onClose={() =>
            this.setState(prevState => ({
              isOverlayVisible: !prevState.isOverlayVisible,
            }))
          }
          rooms={rooms}
        />

        <div className="flat__main-content">
          <div className="flat__main-content__container">
            <div className="flat__main-content__col col col--right">
              <Contact />
              {amenities && (
                <AmenitiesExcerpt
                  className="flat__amenities-preview"
                  {...amenities}
                  onClick={this.toggleAnemities}
                />
              )}
            </div>

            <div className="flat__main-content__col col col--left">
              <div
                className={`flat__amenities${
                  isAmenitiesVisible ? ' flat__amenities--visible' : ''
                }`}
              >
                <h3 className="flat__amenities__title">
                  Équipements
                  <button
                    className="flat__amenities__icon-container"
                    onClick={this.toggleAnemities}
                    type="button"
                  >
                    <Close
                      className="flat__amenities__icon-close"
                      fill="var(--font-color)"
                    />
                  </button>
                </h3>
                {amenities && renderAst(amenities.htmlAst)}
              </div>
              <div
                className={`flat__info${
                  isAmenitiesVisible ? ' flat__info--hidden' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: flat.content }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Flat

Flat.defaultProps = {
  amenities: null,
  className: '',
  flat: {},
  rooms: {},
}

Flat.propTypes = {
  amenities: PropTypes.shape({}),
  className: PropTypes.string,
  flat: PropTypes.shape({}),
  rooms: PropTypes.shape({}),
}

export const flatFragment = graphql`
  fragment Flat_details on FlatsJson {
    id
    name
    description
    cover {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
  fragment Flat_Images on File {
    name
    extension
    childImageSharp {
      resolutions {
        originalName
      }
      original {
        src
      }
    }
  }
  fragment Markdown on MarkdownRemark {
    excerpt
    frontmatter {
      directoryName
      name
      address
      tags
    }
    html
    htmlAst
  }
`
