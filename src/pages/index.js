import React from 'react'
import styled from 'styled-components'

import FlatItem from '../components/FlatItem.js'
import Contact from '../components/Contact.js'

const flats = [
  {id: 1, name: "Maison avec terrase - 110m²", description: "Spacieuse et agréable : composé d'un salon de 45m² et de sa cuisine toute équipée, d'une suite parentale, d'une chambre mansardée, d'une mezzanine et d'une terrasse privative de 30m² équipée d'un salon de jardin."},
  {id: 2, name: "Maison avec terrase - 110m²", description: "Spacieuse et agréable : composé d'un salon de 45m² et de sa cuisine toute équipée, d'une suite parentale, d'une chambre mansardée, d'une mezzanine et d'une terrasse privative de 30m² équipée d'un salon de jardin."},
  {id: 3, name: "Maison avec terrase - 110m²", description: "Spacieuse et agréable : composé d'un salon de 45m² et de sa cuisine toute équipée, d'une suite parentale, d'une chambre mansardée, d'une mezzanine et d'une terrasse privative de 30m² équipée d'un salon de jardin."},
  {id: 4, name: "Maison avec terrase - 110m²", description: "Spacieuse et agréable : composé d'un salon de 45m² et de sa cuisine toute équipée, d'une suite parentale, d'une chambre mansardée, d'une mezzanine et d'une terrasse privative de 30m² équipée d'un salon de jardin."},
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

const IndexPage = () => (
  <Layout className="index">
    <div className="index__side index__side--left">
      
    </div>
    <section className="index__side index__side--right">
      <Contact />
      {flats.map((flat, index) =>
        <FlatItem flat={flat} key={index} />
      )}
    </section>
  </Layout>
)




export default IndexPage
