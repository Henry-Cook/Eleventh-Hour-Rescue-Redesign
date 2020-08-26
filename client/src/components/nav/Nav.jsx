import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/layout/EHS Logo 1.png';
import amzn from '../../assets/images/layout/Amazon@3x.png';
import fb from '../../assets/images/layout/Facebook@3x.png';
import ig from '../../assets/images/layout/Instagram@3x.png';
import twitter from '../../assets/images/layout/Twitter@3x.png';
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

              <li className="page-links">
                <NavLink exact to="/" activeClassName="currentTab">Home</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/aboutus" activeClassName="currentTab">About Us</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/donate" activeClassName="currentTab">Donate</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/404" activeClassName="currentTab">Adopt</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/404" activeClassName="currentTab">Volunteer</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/404" activeClassName="currentTab">Foster</NavLink>
              </li>
              <li className="page-links">
                <NavLink to="/404" activeClassName="currentTab">Events</NavLink>
              </li>

              <li className="social-media-links">
                <NavLink to="/404"><img src={amzn} className="social-media-icons amazon" alt="amazon"/></NavLink>
                <NavLink to="/404"><img src={twitter} className="social-media-icons twitter" alt="twitter"/></NavLink>
                <NavLink to="/404"><img src={fb} className="social-media-icons facebook" alt="facebook"/></NavLink>
                <NavLink to="/404"><img src={ig} className="social-media-icons instagram" alt="instagram"/></NavLink>
              </li>
          
            </ul>
          </nav>
        </div>
      </header>
    </>


  );
};

export default Nav;