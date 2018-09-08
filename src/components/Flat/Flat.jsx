import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Contact, RoomList, FlatDetails } from '../index'
import FlatDetailsImage from './FlatDetailsImage'

class Flat extends PureComponent {
  constructor(props) {
    super(props)

    const { flat } = this.props
    const background = flat.cover.childImageSharp.original.src

    this.state = {
      background,
      isImageVisible: false,
    }
  }

  render() {
    const { className, flat, rooms } = this.props
    const { background, isImageVisible } = this.state

    return (
      <div className={`flat ${className}`}>
        <div
          className="flat__background"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="col col--right">
          <RoomList
            rooms={rooms}
            onImageClick={image => this.setState({ background: image })}
            isAnyRoomOpen={bool => this.setState({ isImageVisible: bool })}
          />
          <Contact />
        </div>
        <div className="col col--left">
          <FlatDetailsImage isVisible={isImageVisible} imageUrl={background} />
          <FlatDetails className="flat__info">
            <div dangerouslySetInnerHTML={{ __html: flat.content }} />
          </FlatDetails>
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
