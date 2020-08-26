import React from "react";
import {Link} from 'react-router-dom'
import Layout from "../../components/layout/Layout.jsx";
import "./home.css";

import ActionCard from "../../components/action-card/ActionCard";
import homedogs from "../../assets/images/homedogs.png";
import { homeCards } from "../../utils/cards.js";

export default function Home() {
  return (
    <Layout>
      <div className="home">

        <img src={homedogs} alt="dogs" id="homedogs" />
        <div className="welcome-message">
          <h1>Welcome</h1>
          <p>
            Eleventh Hour Rescue is a New Jersey based animal shelter which
            prides itself on two things: being a no kill rescue center, and our
            amazing volunteers. We are only able to maintain our dream of saving
            lives through kind donations.
          </p>
        </div>

        <div className="home-links">
          {homeCards.map((card, i) => {
            return (
              <Link to={`/${card.action.toLowerCase()}`}>
                <ActionCard id={'homeCard'} action={card.action} image={card.image} />
                </Link>
            )
          })}
        </div>

      </div>
    </Layout>
  );
}