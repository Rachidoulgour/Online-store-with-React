import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
// import Index from './components/index.jsx';
import Header from './components/header.jsx';
import Panier from './components/panier.jsx';
import Home from './components/home.jsx';

import './App.css';

function Approuter() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
    <Route path="/" exact component={Home}/>
    <Route path="/Header" component={Header}/>
    {/*<Route path="/Index" exact component={Index}/>*/}
    <Route path="/Register" exact component={Register}/>
    <Route path="/Login" exact component={Login}/>
    <Route path="/Panier" exact component={Panier}/> 
      
    </div>
    </BrowserRouter>
  );
}

export default Approuter;
