import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class ContactsPage extends Component {
  render() {
    return (
      <div className='ContactsPage'>
        <div className='Map'>
          <Map
            google={this.props.google}
            zoom={14}
          >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
          </Map>
        </div>
        <div className='contactsData'>
          <p>
            <b>Адреса:</b> м. Київ, вул. Кропоткіна 23
          </p>
          <p>
            <b>Телефон:</b> +380 68 95 28 18
          </p>
          <p>
            <b>E-mail:</b> info@planetakino.ua
          </p>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDNpGZqWk1RSFJPJ9Y2jTmWtFgHs89jwoE')
})(ContactsPage)
