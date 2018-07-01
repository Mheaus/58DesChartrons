import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapsPage = () => (
  <Map
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkDYVJsOErVmqnERqRi1XcFoMWWyC1gt0&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)


const Map = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 44.8579528, lng: -0.5669075 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44.8579528, lng: -0.5669075 }} />}
  </GoogleMap>
)))

export default MapsPage;
