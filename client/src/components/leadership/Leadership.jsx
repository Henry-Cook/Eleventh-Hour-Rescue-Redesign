import React from "react";
import ActionCard from '../action-card/ActionCard'
import "./leadership.css";
import { leadershipCards } from "../../utils/cards.js";

export default function Leadership() {

  return leadershipCards.map((card) => {
    return (
        <ActionCard
        id={'leadershipCard'}
        action={card.action}
        subtitle={card.subtitle}
        image={card.image}
        detail={card.detail}
      />
    );
  });
}