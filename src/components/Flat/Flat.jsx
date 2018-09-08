import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Contact, Overlay } from '../index'

class Flat extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOverlayVisible: false,
    }
  }

  render() {
    const { className, flat, rooms } = this.props
    const { isOverlayVisible } = this.state
    const defaultImageUrl = flat.cover.childImageSharp.original.src

    return (
      <div
        className={`flat ${className}${
          isOverlayVisible ? ' flat--covered' : ''
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
          <div className="flat__main-content__col col col--right">
            <Contact />
          </div>
          <div className="col col--left">
            <div
              className="flat__info"
              dangerouslySetInnerHTML={{ __html: flat.content }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Flat

Flat.defaultProps = {
  className: '',
  flat: {},
  rooms: [],
}

Flat.propTypes = {
  className: PropTypes.string,
  flat: PropTypes.shape({}),
  rooms: PropTypes.arrayOf(PropTypes.shape({})),
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
    timeToRead
    frontmatter {
      directoryName
      name
      address
    }
    html
  }
`
