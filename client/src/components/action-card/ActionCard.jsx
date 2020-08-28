import React from "react";

import "./action-card.css";

export default function ActionCard(props) {
  return (
    <div className="action-card" style={props.style} id={`${props.id}`}>
      <img src={props.image} />
      <h2>{props.action}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.detail}</p>
      <button onClick={props.handleClick}>Edit</button>
    </div>
  );
}
