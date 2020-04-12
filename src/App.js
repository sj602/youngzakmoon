import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TextScreen from "./components/TextScreen";
import ImageScreen from "./components/ImageScreen";
import Ranking from "./components/Ranking";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/text" component={TextScreen} />
        <Route path="/image" component={ImageScreen} />
        <Route path="/voice" component={TextScreen} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </div>
  );
};

export default App;
