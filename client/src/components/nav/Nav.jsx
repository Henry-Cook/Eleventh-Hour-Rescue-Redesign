import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/layout/EHS Logo@3x.png'
import './nav.css';

const Nav = () => {
  return (

    <>
      <header>
        <div className="header-content">
          <img src={logo} className="ehr-logo" alt="Eleventh Hour Rescue Logo" />
          <h1 className="ehr-name">Eleventh Hour Rescue</h1>
          <nav className="navi">
            <ul className="navLinks">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/404">Adopt</Link></li>
              <li><Link to="/404">Volunteer</Link></li>
              <li><Link to="/404">Foster</Link></li>
              <li><Link to="/404">Events</Link></li>
          
            </ul>
          </nav>
        </div>
      </header>
    </>


  );
};

export default Nav;