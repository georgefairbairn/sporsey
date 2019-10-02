import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const SoccerPage = () => (
  <div>
    <h1>SOCCER PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/soccer" component={SoccerPage} />
      </Switch>\
    </div>
  );
}

export default App;
