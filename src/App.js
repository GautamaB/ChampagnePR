import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";


import ImageHeader from "./components/ImageHeader";
import Articles from "./components/Articles";
import NavbarTop from "./components/NavbarTop"

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <ImageHeader />
        <Articles />
      </div>
    );
  }
}

export default App;
