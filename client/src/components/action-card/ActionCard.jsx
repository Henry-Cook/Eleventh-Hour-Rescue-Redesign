import React from "react";

import "./action-card.css";

export default function InfoCard(props) {
  return (
    <div className="action-card" style={props.style} id={`${props.id}`}>
      <img src={props.image} />
      <h2>{props.action}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.detail}</p>
    </div>
  );
}
