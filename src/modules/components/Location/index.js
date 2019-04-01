import React from 'react';
import Map from './Map';

const API_KEY = 'AIzaSyBl0z3pZCqNckB403S1VYy584dP6CMTe-o';
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

export default class MapWrapper extends React.Component {
  render() {
    return (
      <Map
        googleMapURL={MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}