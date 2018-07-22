import React from 'react'
import styled from 'styled-components'

import { FlatItem, FlatHighlight, Contact } from '../components'
import indexCover from '../assets/image/58-des-chartrons/living_room3-min.jpg'

const Layout = styled.div`
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
      background: #F9FAFC;
      float: right;
      padding: 1.5rem 0 2rem 3rem;
    }
  }
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: {
        name: "4 Locations près du centre et des quais de Bordeaux",
        description: "Facile d'accès, situé dans le quartier des Chartrons. Idéal pour les familles.",
        cover: indexCover
      }
    };
  }

  changeCurrentFlat = (flatId) => {
    const flats = Object.values(this.props.data.allFlatsJson.edges)
    this.setState({
      selectedFlat: flats[flatId].node
    })
  }

  render() {
    const flats = this.props.data.allFlatsJson.edges
    console.log(flats);
    return (
      <Layout className="index">
        <div className="index__side index__side--left">
          <FlatHighlight flat={this.state.selectedFlat}/>
        </div>
        <section className="index__side index__side--right">
          <Contact />
          {flats.map(({node: flat}, index) =>
            <FlatItem
              flat={flat}
              key={index}
              onItemHover={() => this.changeCurrentFlat(index)}
            />
          )}
        </section>
      </Layout>
    )
  }
}

export default IndexPage;

// The flat template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
// eslint-disable-next-line
export const indexPageQuery = graphql`
  query FlatsQuery {
    # Select the flat which equals this id.
    allFlatsJson {
      edges {
        node {
          id
          name
          surface
          description
          cover {
          	id
          }
        }
      }
    }
  }
`
