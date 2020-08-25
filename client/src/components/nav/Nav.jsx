import React from "react";
import { Link } from "react-router-dom";
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

              <li className="page-links"><Link to="/">Home</Link></li>
              <li className="page-links"><Link to="/aboutus">About Us</Link></li>
              <li className="page-links"><Link to="/donate">Donate</Link></li>
              <li className="page-links"><Link to="/404">Adopt</Link></li>
              <li className="page-links"><Link to="/404">Volunteer</Link></li>
              <li className="page-links"><Link to="/404">Foster</Link></li>
              <li className="page-links"><Link to="/404">Events</Link></li>

              <li className="social-media-links">
                <Link to="/404"><img src={amzn} className="social-media-icons amazon" alt="amazon"/></Link>
                <Link to="/404"><img src={twitter} className="social-media-icons twitter" alt="twitter"/></Link>
                <Link to="/404"><img src={fb} className="social-media-icons facebook" alt="facebook"/></Link>
                <Link to="/404"><img src={ig} className="social-media-icons instagram" alt="instagram"/></Link>
              </li>
          
            </ul>
          </nav>
        </div>
      </header>
    </>


  );
};

export default Nav;