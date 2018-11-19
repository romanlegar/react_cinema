import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const ContactsMap = () =>(
  <Map  google={this.props.google} zoom={4}>

    <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

    <InfoWindow onClose={this.onInfoWindowClose}>

    </InfoWindow>
  </Map>
)
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDNpGZqWk1RSFJPJ9Y2jTmWtFgHs89jwoE')
})(ContactsMap);
