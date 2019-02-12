import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavbarTop from "./components/NavbarTop";
import ImageHeader from "./components/ImageHeader";
import ImageParallaxReact from "./components/ImageParallaxReact";
import ChampPr from "./components/ChampPr";
import ChampSr from "./components/ChampSr";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <ImageParallaxReact />
        <ChampPr />
        <ChampSr />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
