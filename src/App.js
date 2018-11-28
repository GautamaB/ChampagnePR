import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImageHeader from "./components/ImageHeader";
import BodyText from "./components/BodyText";

class App extends Component {
  render() {
    return (
      <div>
        <ImageHeader />
        <BodyText />
      </div>
    );
  }
}

export default App;
