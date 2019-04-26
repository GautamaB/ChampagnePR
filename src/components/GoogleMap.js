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
          width: "100%",
          height: "430px",
          margin: "14% 6%"
        }}
        initialCenter={{
          lat: 48.947992,
          lng: 4.025
        }}
        zoom={16}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Champagne Patrick Regnault"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          >
          <div>
            <h1 style={{ fontSize: "18px", textAlign: "center" }}>
              Champagne Patrick Regnault
            </h1>
            <img
              src="/image/entrée.jpg"
              alt="Entrée"
              style={{ width: "150px", height: "80px", marginLeft: "20px" }}
            />
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCAVTFa2l7dyaYUEmHfvXTVnMcYF8JVqI8"
})(MapContainer);
