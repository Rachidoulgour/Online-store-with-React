import React from 'react';

import {NavLink } from "react-router-dom";
import './header.css';
// import Register from './register';
// import Login from './login';
import Home from './home.jsx';
const Header=(props)=>{
    return(
        <div className="header">
            <ul>
                <li><NavLink to="/register/" className="navlink">Creer un compte</NavLink></li>
                <li><NavLink to="/login/" className="navlink">Se connecter</NavLink></li>
                <li><NavLink to="/" className="navlink">Home</NavLink></li>
                <li><NavLink to="/pannier/" className="navlink">Panier</NavLink></li>
            </ul>
        </div>
  

)}
export default Header;