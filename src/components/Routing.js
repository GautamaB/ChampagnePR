import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import GalleryAll from "./GalleryAll";

const Routing = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/GalleryAll" component={GalleryAll} />
    </Switch>
  </div>
);

export default Routing;
