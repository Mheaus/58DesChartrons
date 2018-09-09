import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Flat, Layout } from '../components'

class FlatTemplate extends Component {
  createRoomsFromData = data => {
    const rooms = {}

    data.forEach(node => {
      const imageName = node.childImageSharp.resolutions.originalName
      const imageSrc = node.childImageSharp.original.src
      const roomName = /([a-z]+)/.exec(imageName)[0]

      if (rooms[roomName]) {
        Object.assign(rooms, {
          [roomName]: [...rooms[roomName], imageSrc],
        })
      } else {
        Object.assign(rooms, { [roomName]: [imageSrc] })
      }
    })
    return rooms
  }

  render() {
    const { data } = this.props
    const images = data.allFile.edges.map(({ node }) => node)
    const rooms = this.createRoomsFromData(images)
    const markdownData = data.allMarkdownRemark.edges.map(({ node }) => node)
    const description = markdownData.find(node =>
      node.frontmatter.tags.includes('description')
    )
    const amenities = markdownData.find(node =>
      node.frontmatter.tags.includes('amenities')
    )

    return (
      <Layout>
        <Flat
          flat={{ ...data.flatsJson, content: description.html }}
          amenities={amenities}
          frontMatter={markdownData.frontmatter}
          rooms={rooms}
        />
      </Layout>
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
export const pageQuery = graphql`
  query FlatQuery(
    $id: String!
    $directoryName: String!
    $directoryPath: String!
  ) {
    # Select the flat which equals this id.
    flatsJson(id: { eq: $id }) {
      ...Flat_details
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        dir: { regex: $directoryPath }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          ...Flat_Images
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { directoryName: { eq: $directoryName } } }
    ) {
      edges {
        node {
          ...Markdown
        }
      }
    }
  }
`
