import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    //<div className="App">
    //  <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
    //          <p id="test">
    //              Here's some test code for doing the SHA256 crypto stuff:
    //              <br/>
    //              hunter2 =&nbsp;
    //              {
    //                  SHA256('hunter2').toString() //hash for hunter2 = f52fbd32b2b3b86ff88ef6c490628285f482af15ddcb29541f94bcf526a3f6c7
    //              }
    //    </p>
    //    <a
    //      className="App-link"
    //      href="https://reactjs.org"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      Learn React
    //    </a>
    //  </header>
    //</div>
      <div className="App">
          {/*add nav bar*/}
          {/*logo icon reference: {https://icons8.com/icon/6419/bullet-camera}*/}
          {/*{nav bar reference:https://getbootstrap.com/docs/5.3/components/navbar/#nav}*/}
          <nav className="navbar navbar-expand-lg" >
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/Home">
                      {/*add logo*/}
                      <img
                          src="./logo-black.png"
                          alt="MPDC Icon"
                          width="50"
                          height="50" />
                      <span> MPDC Site Selector</span>
                  </Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="navbar-nav">
                          <Link className="nav-link active" to="/Home">Home</Link>
                          <Link className="nav-link" to="/Report">Report</Link>
                          <Link className="nav-link" to="/About">About</Link>
                      </div>
                  </div>
              </div>
          </nav>
          {/* Outer container for main background */}
          <div className="main-container">
              {/* Inner container with content */}
              <div className="inner-content">
                  <Outlet /> 
              </div>
          </div>
          
      </div>
  );
}

export default App;
