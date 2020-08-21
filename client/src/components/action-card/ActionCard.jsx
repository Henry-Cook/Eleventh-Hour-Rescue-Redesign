import React from "react";

import './action-card.css'

export default function InfoCard(props) {
  return (
    <div className="action-card" id={`${props.id}`}>
      <img src={props.image} />
      <h2>{props.action}</h2>
    </div>
  );
}
