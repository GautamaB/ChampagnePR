import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImageHeader from "./components/ImageHeader";
import FirstArticle from "./components/FirstArticle";
import NavbarTop from "./components/NavbarTop";
import VinArticle from "./components/VinArticle";
import ChampArticle from "./components/ChampArticle";
import ChampPr from "./components/ChampPr";
import ChampSr from "./components/ChampSr";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <FirstArticle />
        <VinArticle />
        <ChampArticle />
        <ChampPr />
        <ChampSr />
      </div>
    );
  }
}

export default App;
