import React from 'react';
import ActionCard from '../../components/action-card/ActionCard'

import { impactCards } from "../../utils/cards.js";
import './impact.css'

export default function Impact() {
  return (
    <div className="impact">

{impactCards.map((card, i) => {
            return (
              <ActionCard id={i} action={card.action} image={card.image} detail={card.detail} />
            )
          })}
      
    </div>
  );
}
