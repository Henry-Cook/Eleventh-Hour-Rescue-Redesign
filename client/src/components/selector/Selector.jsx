import React, { useState } from "react";
import "./selector.css";

function Selector(props) {
  const [choices, setChoices] = useState({
    type: "",
    amount: "",
  });
  const [tabOneBool, setTabOneBool] = useState(false);
  const [tabTwoBool, setTabTwoBool] = useState(false);
  const [btnStyleValue, setBtnStyleValue] = useState("");

  // let tabOneBool = false;
  // let tabTwoBool = false;

  const handleTypeClick = (e) => {
    console.log(tabOneBool);
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
          <button
            className={tabOneBool === true ? "tab-one" : "tab-one-clicked"}
            onClick={(e) => {
              setTabOneBool(false);
              setTabTwoBool(false);
              handleTypeClick(e);
            }}
            value="monthly"
          >
            Monthly
          </button>
          <button
            className={tabOneBool === false ? "tab-two" : "tab-two-clicked"}
            onClick={(e) => {
              setTabTwoBool(true);
              setTabOneBool(true);
              handleTypeClick(e);
            }}
            value="oneTime"
          >
            One-Time
          </button>
        </div>
        <div className="selector-btns">
          <div className="btn-grid">
            <button
              className={btnStyleValue === "5" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("5");
                handleAmountClick(e);
              }}
              name="amount"
              value="5"
            >
              $5
            </button>
            <button
              className={btnStyleValue === "10" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("10");
                handleAmountClick(e);
              }}
              name="amount"
              value="10"
            >
              $10
            </button>
            <button
              className={btnStyleValue === "25" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("25");
                handleAmountClick(e);
              }}
              name="amount"
              value="25"
            >
              $25
            </button>
            <button
              className={btnStyleValue === "50" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("50");
                handleAmountClick(e);
              }}
              name="amount"
              value="50"
            >
              $50
            </button>
            <button
              className={btnStyleValue === "100" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("100");
                handleAmountClick(e);
              }}
              name="amount"
              value="100"
            >
              $100
            </button>
            <button
              className={btnStyleValue === "other" ? "btns-clicked" : "btns"}
              onClick={(e) => {
                setBtnStyleValue("other");
                handleAmountClick(e);
              }}
              name="amount"
              value="other"
            >
              Other
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector;
