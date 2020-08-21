import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (

    <>
      <header>
        <h1 className="ehr-name">Eleventh Hour Rescue</h1>
        <nav>
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
      </header>
    </>

  );
}