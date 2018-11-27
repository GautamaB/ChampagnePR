import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImageHeader from "./components/ImageHeader";
import BodyText from "./components/BodyText";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ImageHeader />
          <BodyText />
        </header>
      </div>
    );
  }
}

export default App;
