import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

import NavbarTop from "./NavbarTop";
import ImageHeader from "./ImageHeader";
import ImageParallaxReact from "./ImageParallaxReact";
import ChampPr from "./ChampPr";
import ChampSr from "./ChampSr";

import ChampSrBouteille from "./ChampSrBouteille";

import Gallery from "./Gallery";
import Footer from "./Footer";

class Main extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <ImageParallaxReact />
        <ChampPr />
        <ChampSr />
        <br />
        <ChampSrBouteille />
        <Gallery />
        <Footer />
        <div>
          <ScrollUpButton
            AnimationDuration={800}
            ShowAtPosition={3100}
            style={{ marginRight: "-15px" }}
          />
        </div>
      </div>
    );
  }
}

export default Main;
