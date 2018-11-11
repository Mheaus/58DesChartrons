import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TransitionGroup } from 'react-transition-group'

import { Contact, FlatItem, FlatHighlight, Layout } from '../components'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlatId: 0,
    }
  }

  changeCurrentFlat = flatId =>
    this.setState({
      selectedFlatId: flatId + 1,
    })

  render() {
    const { className, data } = this.props
    const flats = data.allFlatsJson.edges
    const { selectedFlatId } = this.state

    return (
      <Layout className={`index ${className}`}>
        <div className="index__side index__side--left">
          <TransitionGroup>
            <FlatHighlight
              name="4 Locations près du centre et des quais de Bordeaux"
              description="Facile d'accès, situé dans le quartier des Chartrons. Idéal pour les familles."
              image={data.defaultCover.childImageSharp}
              visible={selectedFlatId === 0 && true}
            />
            {data.allFlatsJson.edges.map(({ node }, index) => (
              <FlatHighlight
                {...node}
                image={node.cover.childImageSharp}
                key={node.id}
                visible={selectedFlatId === index + 1 && true}
              />
            ))}
          </TransitionGroup>
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
      position: relative;
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
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    defaultCover: file(name: { eq: "default-cover" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
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
