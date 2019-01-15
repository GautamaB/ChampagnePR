import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: "90%",
          height: "550px",
          marginTop: "45px",
          marginLeft: "45px"
        }}
        initialCenter={{
          lat: 48.947992,
          lng: 4.025
        }}
        zoom={16}
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} name={"champagne"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>home</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCAVTFa2l7dyaYUEmHfvXTVnMcYF8JVqI8"
})(MapContainer);
