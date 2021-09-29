import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";

import './App.css';
import "./css/nav.css";

import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage'; 

import BookmarkPage from './pages/BookmarkPage.js';
import DataPage from './pages/DataPage.js';

import HomeIcon from './images/home-icon.svg';
import DataIcon from './images/data-icon.svg';
import LogoutIcon from './images/logout-icon.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 16,
    };
  }

  render() {
    return (
      <>
        <Router>
          <div className="sidebar">
              <div className="sm-wrapper">
                  <NavLink activeClassName={"active"} className="nav-link" exact={true} to="/">
                    <img src={HomeIcon} alt="Home icon"/>
                  </NavLink>

                  <NavLink activeClassName={"active"} className="nav-link" to="/data">
                    <img src={DataIcon} alt="Data icon"/>
                  </NavLink>

                  <NavLink className="nav-link-logout" to="/data1">
                    <img src={LogoutIcon} alt="Logout icon"/>
                  </NavLink>
              </div>

              <div className="main-content-container">
                <div className="main-content-wrapper">
                  <Route path="/" exact render={() => <BookmarkPage/>}/>
                  <Route path="/data" exact render={() => <DataPage/>}/>
                </div>
                  
              </div>
          </div>

        </Router>
    </>
    );
  }


}

export default App;
