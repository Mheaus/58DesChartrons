import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Contact, FlatItem, FlatHighlight, Layout } from '../components'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    const { data } = this.props

    this.state = {
      selectedFlat: {
        name: '4 Locations près du centre et des quais de Bordeaux',
        description:
          "Facile d'accès, situé dans le quartier des Chartrons. Idéal pour les familles.",
        cover: data.defaultCover.childImageSharp.original.src,
      },
    }
  }

  changeCurrentFlat = flatId => {
    const { data } = this.props
    const flats = data.allFlatsJson.edges
    const flat = Object.values(flats)[flatId].node
    const cover = flat.cover.childImageSharp.original.src

    return this.setState({
      selectedFlat: {
        ...flat,
        cover,
      },
    })
  }

  render() {
    const { className, data } = this.props
    const flats = data.allFlatsJson.edges
    const { selectedFlat } = this.state

    return (
      <Layout className={`index ${className}`}>
        <div className="index__side index__side--left">
          <FlatHighlight flat={selectedFlat} />
        </div>
        <section className="index__side index__side--right">
          <Contact />
          {flats.map(({ node: flat }, index) => (
            <FlatItem
              flat={flat}
              key={flat.name}
              onItemHover={() => this.changeCurrentFlat(index)}
            />
          ))}
        </section>
      </Layout>
    )
  }
}

export default styled(IndexPage)`
  height: 100%;
  width: 100%;

  .index__side {
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    width: 50%;
    &.index__side--left {
      float: left;
    }
    &.index__side--right {
      background: #f9fafc;
      float: right;
      padding: 1.5rem 0 2rem 3rem;
    }
  }
`

IndexPage.defaultProps = {
  data: {},
  className: '',
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
  className: PropTypes.string,
}

// The flat template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const indexPageQuery = graphql`
  query FlatsQuery($directoryName: String) {
    # Select the flat which equals this id.
    allFlatsJson {
      edges {
        node {
          id
          name
          surface
          description
          cover {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
    defaultCover: file(name: { eq: "living_room3-min" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "data" }
        dir: { regex: $directoryName }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          extension
          name
        }
      }
    }
  }
`
