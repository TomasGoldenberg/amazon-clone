import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Containers/Home";
import Checkout from "./Containers/Checkout"


import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/checkout" exact component={Checkout}/>

        </Switch>
    </Router>
  );
}

export default App;
