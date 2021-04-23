import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Beers from './components/Beers';
import NavBar from './components/NavBar';
import BeerDetails from './components/BeerDetails';
import axios from 'axios';
import RandomBeer from './components/RandomBeer'

function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:_id" component={BeerDetails} />
      <Route exact path="/random-beer" component={RandomBeer} />
      {/* <Route exact path="/new-beer" component={NewBeer} /> */}
    </Switch>
    </div>
  );
}

export default App;
