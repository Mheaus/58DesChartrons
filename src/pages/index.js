import React from 'react'
import styled from 'styled-components'

import { FlatItem, FlatHighlight, Contact } from '../components'

import flat1Cover from '../assets/image/42-rue-binaud/living_room3.jpg'
import flat2Cover from '../assets/image/terrasse-des-chartrons/living_room3-min.jpg'
import flat3Cover from '../assets/image/58-des-chartrons/living_room3-min.jpg'
import flat4Cover from '../assets/image/jardin-des-chartrons/living_room2-min.jpeg'

const flats = [
  {
    id: 1,
    name: "La Maison",
    surface: 110,
    description: "Spacieuse et agréable : composé d'un salon de 45m² et de sa cuisine toute équipée, d'une suite parentale, d'une chambre mansardée, d'une mezzanine et d'une terrasse privative de 30m² équipée d'un salon de jardin.",
    cover: flat1Cover
  },
  {
    id: 2,
    name: "Le Premier",
    surface: 110,
    description: "Venez découvrir le quartier des Chartrons à 5 min à pied des quais. L'appartement située au 1er étage sans ascenseur a été totalement réhabilité et rénové. L'espace de vie est adaptée aux familles ou groupe d'amis.",
    cover: flat2Cover
  },
  {
    id: 3,
    name: "Le Second",
    surface: 110,
    description: "Appartement de 110 m2 baignée de lumière avec sa terrasse sur les toits. Située au deuxième étage sans ascenseur d un immeuble entièrement rénové.",
    cover: flat3Cover
  },
  {
    id: 4,
    name: "Le Terre-à-Terre",
    surface: 100,
    description: "Bienvenue chez vous. Un week-end, des vacances,passez un bon moment de tranquillité dans cette appartement composé de 3 chambres avec sa terrasse/jardin arboré. Située en rez de chaussé, l'appartement a été entièrement réhabilité avec soin.",
    cover: flat4Cover
  },
]

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
        cover: flat3Cover
      }
    };
  }

  changeCurrentFlat = (flatId) => {
    this.setState({
      selectedFlat: flats[flatId]
    })
  }

  render() {
    return (
      <Layout className="index">
        <div className="index__side index__side--left">
          <FlatHighlight flat={this.state.selectedFlat}/>
        </div>
        <section className="index__side index__side--right">
          <Contact />
          {flats.map((flat, index) =>
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
