import React from "react";

export default function InfoCard(props) {
  return (
    <div className="action-card">
      <img src={props.image} />
      <h2>{props.action}</h2>
    </div>
  );
}
