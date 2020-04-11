import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TextScreen from "./components/TextScreen";
import ImageScreen from "./components/ImageScreen";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/text">
          <TextScreen />
        </Route>
        <Route path="/image">
          <ImageScreen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
