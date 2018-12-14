import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImageHeader from "./components/ImageHeader";
import FirstArticle from "./components/FirstArticle";
import NavbarTop from "./components/NavbarTop";
import VinArticle from "./components/VinArticle";
import ChampArticle from "./components/ChampArticle";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <FirstArticle />
        <VinArticle />
        <ChampArticle />
      </div>
    );
  }
}

export default App;
