import React, { useState } from "react";
import "./selector.css";

function Selector(props) {
  const [choices, setChoices] = useState({
    type: "",
    amount: "",
  });

  const handleTypeClick = (e) => {
    setChoices({
      ...choices,
      type: e.target.value,
    });
  };

  const handleAmountClick = (e) => {
    setChoices({
      ...choices,
      amount: e.target.value,
    });
  };

  return (
    <>
      <div className="selector-container">
        <div className="selector-tabs">
          <button onClick={handleTypeClick} value="monthly">
            Monthly
          </button>
          <button onClick={handleTypeClick} value="oneTime">
            One-Time
          </button>
        </div>
        <div className="selector-btns">
          <button onClick={handleAmountClick} name="amount" value="5">
            $5
          </button>
          <button onClick={handleAmountClick} name="amount" value="10">
            $10
          </button>
          <button onClick={handleAmountClick} name="amount" value="25">
            $25
          </button>
          <button onClick={handleAmountClick} name="amount" value="50">
            $50
          </button>
          <button onClick={handleAmountClick} name="amount" value="100">
            $100
          </button>
          <button onClick={handleAmountClick} name="amount" value="other">
            Other
          </button>
        </div>
      </div>
    </>
  );
}

export default Selector;
