import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Customize from './components/customize';
import { useState } from 'react';

function App() {
  const [ingradients,setIngradients]= useState({
    onions: false,
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false
  });
  return (
    <>
    <Header />
    <Router>
    <Switch>
    <Route exact path="/">
     <Customize ingradients={ingradients} />
    </Route>
    <Route path="/checkout">
    <h1>checkout</h1>
    </Route>
  </Switch>
    </Router>

    </>
 
  );
}

export default App;
