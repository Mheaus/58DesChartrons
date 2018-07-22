import React, { PureComponent } from 'react'

import { Contact, RoomList, FlatDetails } from '../components/';
import { StyledFlatLayout } from '../style'

const flat = {
  rooms: {
    // salle_de_bain: [...flatImages.slice(0, 5)],
    // dressing: [...flatImages[6]],
    // cuisine: [...flatImages.slice(7, 12)],
    // salon: [...flatImages.slice(13, 20)],
    // extérieur: [...flatImages.slice(21, 29)],
    // chambre_1: [...flatImages.slice(30, 31)],
    // chambre_2: [...flatImages.slice(32, 35)],
    // chambre_3: [...flatImages.slice(36, 37)],
    // chambre_4: [...flatImages.slice(38, 40)],
  }
}

const FlatDetailsImage = ({ isVisible, imageUrl }) => (
  <div className={`flat__image${ isVisible ? " flat__image--visible": ""}`}>
    <img src={imageUrl} alt="flat" />
  </div>
)

class Flat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      background: flat.rooms.salon[6],
      isImageVisible: false,
    }
  }

  render() {

    return(
      <StyledFlatLayout className="flat" background={this.state.background}>

        <div className="flat__background"></div>
        <div className="col col--right">

          <RoomList
            rooms={flat.rooms}
            onImageClick={(image) => this.setState({background: image})}
            isAnyRoomOpen={(bool) => this.setState({isImageVisible: bool})}
          />

          <Contact />

        </div>
        <div className="col col--left">

          <FlatDetailsImage  
            isVisible={this.state.isImageVisible}
            imageUrl={this.state.background}
          />

          <FlatDetails className="flat__info">
            <h1>Maison+terrasse/Bordeaux Chartrons</h1>
            <p>En plein coeur des Chartrons au calme à 10 m à pied des quais et du centre , maison spacieuse et agréable ; salon de 45 M2 et sa cuisine toute équipée, une suite parentale, une chambre mansardée et une mezzanine,d'une terrasse privative de 30 M2 équipée d'un salon de jardin...</p>
            <h3>Le logement</h3>
            <p>Située dans le quartier des Chartrons.
              Charmante maison au calme de 115 M2, qui peut accueillir de 2 à 8 personnes.
              La maison est une dépendance située au fond de notre jardin,la terrasse cloturée sépare les 2 maisons.</p>
            <h3>Descriptif :</h3>
            <ul>
              <li>- Grand salon/salle à manger ensoleillé donnant sur la terrasse (canapé convertible 2 places, table basse, meuble Tv, grand écran plat, table pour manger) ;</li>
              <li>- Cuisine américaine toute équipée : réfrigérateur, four, micro-onde, plaque à induction, lave-vaisselle, grille pain, machine à café, assortiments de vaisselles et de verres. </li>
              <li>- Buanderie avec machine à laver </li>
              <li>- Suite parentale : lit 2 places 160×200, tables de chevet, dressing, salle de bain et douche tout confort.</li>
            </ul>
            <h3>Etage :</h3>
            <ul>
              <li>- Chambre mansardée : 2 lits d'une place 90x200 modulable pour un lit de 2 personnes, table de chevet, commode ;</li>
              <li>- Mezzanine avec lit 2 places 140x200 qui vue sur le salon (pouvant faire office de salle de jeu , coin détente, bureau...)</li>
              <li>- Salle d'eau + toilette.</li>
            </ul>
            <ul>
              <li>- Linge de maison : nous vous fournissons les draps et les serviettes de toilette GRATUITEMENT ! </li>
              <li>- Sur demande lit parapluie combiné et chaise haute.</li>
              <li>- Le logement est équipé de la climatisation.</li>
            </ul>

            <h3>Échanges avec les voyageurs</h3>
            <p>N'hésitez pas à me contacter pour toute information complémentaire ou autre, je répondrai présent dans la mesure du possible.</p>

            <h3>Autres remarques</h3>
            <p>Des dépliants sont à votre disposition pour des idées de circuits touristiques, Wine Tour, des bons plans aux alentours, des musées, des zoos, des plages, parc aquatique.....
              Une machine à café tassimo est mise à votre disposition. Pensez à emporter des capsules si vous le désirez.</p>
          </FlatDetails>

        </div>
      </StyledFlatLayout>
    )
  }
}
export default Flat;

// eslint-disable-next-line
export const flatFragment = graphql`
  fragment Flat_details on FlatsJson {
    id
    name
    description
  }
`
