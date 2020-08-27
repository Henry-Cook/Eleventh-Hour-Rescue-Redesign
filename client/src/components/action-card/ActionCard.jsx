import React, {useState} from "react";

import "./action-card.css";

export default function InfoCard(props) {

  const [editForm, setEditForm] = useState(false)

  return (
    <div className="action-card" style={props.style} id={`${props.id}`}>
      <img src={props.image} />
      <h2>{props.action}</h2>
      <p>{props.detail}</p>
    </div>
  )
}
