import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

//screens
import HomeScreen from "../screens/home/HomeScreen";
import CharacterDetailScreen from "../screens/characterDetail/CharacterDetailScreen";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/characters/:id" component={CharacterDetailScreen} />
      </Router>
    </>
  );
}

export default App;
