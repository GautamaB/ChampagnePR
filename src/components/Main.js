import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavbarTop from "./NavbarTop";
import ImageHeader from "./ImageHeader";
import ImageParallaxReact from "./ImageParallaxReact";
import ChampPr from "./ChampPr";
import ChampSr from "./ChampSr";

import Gallery from "./Gallery";
import Footer from "./Footer";
import Presentation from "./Presentation";

class Main extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <ImageParallaxReact />
        <ChampPr />
        <Presentation />
        <ChampSr />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default Main;
