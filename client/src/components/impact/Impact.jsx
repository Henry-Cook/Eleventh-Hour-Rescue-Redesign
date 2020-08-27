import React from "react";
import ActionCard from "../../components/action-card/ActionCard";

import { impactCards } from "../../utils/cards.js";
import "./impact.css";

export default function Impact() {
  return (
    <div className="impactCards">
      {impactCards.map((card, i) => {
        return (
          <ActionCard
            style={{
              backgroundColor: "#e1e1e1",
              padding: '1vh'
            }}

            id={`impact${i + 1}`}
            action={card.action}
            image={card.image}
            detail={card.detail}
          />
        );
      })}
    </div>
  );
}
