import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <>
      <header>
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