import React from 'react';
import ActionCard from '../../components/action-card/ActionCard'

import { impactCards } from "../../utils/cards.js";
import './impact.css'

export default function Impact() {
  return (
    <div className="impact">

{impactCards.map((card, i) => {
  return (
    <div className="impactCard">
      
      <ActionCard style={{
        backgroundColor: '#e1e1e1',
        width: '100%',
        padding: '0'}}
        id={`impact${i+1}`}
        action={card.action}
        image={card.image}
        detail={card.detail} />
      
    </div>
            )
          })}
      
    </div>
  );
}