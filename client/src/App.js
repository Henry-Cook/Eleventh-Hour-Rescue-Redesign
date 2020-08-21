import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import AboutUs from "./screens/donate/Donate.jsx";
import Donate from "./screens/donate/Donate.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/donate" component={Donate} />
      </Switch>
    </div>
  );
}

export default App;
