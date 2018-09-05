import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flat } from '../components'

class FlatTemplate extends Component {
  createRoomsFromData = data => {
    const rooms = {}

    data.forEach(node => {
      const imageName = node.childImageSharp.resolutions.originalName
      const imageSrc = node.childImageSharp.original.src
      const roomName = /([a-z]+)/.exec(imageName)[0]

      rooms[roomName]
        ? Object.assign(rooms, {
            [roomName]: [...rooms[roomName], imageSrc],
          })
        : Object.assign(rooms, { [roomName]: [imageSrc] })
    })
    return rooms
  }

  render() {
    const { data } = this.props
    const flatImages = data.allFile.edges.map(({ node }) => node)

    return (
      <Flat
        flat={data.flatsJson}
        flatImages={flatImages}
        rooms={this.createRoomsFromData(flatImages)}
      />
    )
  }
}

export default FlatTemplate

FlatTemplate.defaultProps = {
  data: {
    flatsJson: {},
    allFile: {},
  },
}

FlatTemplate.propTypes = {
  data: PropTypes.shape({
    flatsJson: PropTypes.object.isRequired,
    allFile: PropTypes.object.isRequired,
  }),
}

// The flat template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
// eslint-disable-next-line
export const pageQuery = graphql`
  query FlatQuery($id: String!, $imageDirectoryName: String!) {
    # Select the flat which equals this id.
    flatsJson(id: { eq: $id }) {
      ...Flat_details
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        dir: { regex: $imageDirectoryName }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          ...Flat_Images
        }
      }
    }
  }
`
