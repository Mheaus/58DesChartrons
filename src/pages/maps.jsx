import React from 'react'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import Contact from '../components'

const MapsPage = () => (
  <Map
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkDYVJsOErVmqnERqRi1XcFoMWWyC1gt0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)

const CardContact = styled.div`
  background: #fff;
  border-radius: 3px;
  height: 10rem;
  padding: 1rem 0 0 2rem;
  position: absolute;
  right: 0.75rem;
  top: 5.25rem;
  width: 32rem;
  .contact__form {
    background: #fff;
    margin-left: -2rem;
    padding: 0 0 1rem 2rem;
    &.contact__form--open {
      height: 21rem;
      .contact__form__submit {
        bottom: 1.25rem;
      }
    }
  }
`

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.8579528, lng: -0.5669075 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 44.8579528, lng: -0.5669075 }} />
      )}
      {props.isMarkerShown && (
        <Marker position={{ lat: 44.858836, lng: -0.570341 }} />
      )}
      <CardContact>
        <Contact />
      </CardContact>
    </GoogleMap>
  ))
)

export default MapsPage
