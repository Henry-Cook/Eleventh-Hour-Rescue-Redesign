import React, { useState, useContext } from "react";
import { DisableRadio } from "../form/Form";
import "./selector.css";

function Selector(props) {
  const [tabStyleValue, setTabStyleValue] = useState("monthly");
  const [btnStyleValue, setBtnStyleValue] = useState("");
  const [otherBlur, setOtherBlur] = useState(true);

  return (
    <>
      <div className="selector-container">
        <div className="selector-tabs">
          <button
            className={
              tabStyleValue !== "monthly" ? "tab-one" : "tab-one-clicked"
            }
            onClick={(e) => {
              setTabStyleValue("monthly");
              props.handleTypeClick(e);
            }}
            value="monthly"
          >
            Monthly
          </button>
          <button
            className={
              tabStyleValue !== "oneTime" ? "tab-two" : "tab-two-clicked"
            }
            onClick={(e) => {
              setTabStyleValue("oneTime");
              props.handleTypeClick(e);
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
                props.handleAmountClick(e);
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
                props.handleAmountClick(e);
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
                props.handleAmountClick(e);
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
                props.handleAmountClick(e);
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
                props.handleAmountClick(e);
              }}
              name="amount"
              value="100"
            >
              $100
            </button>
            <input
              className={otherBlur ? "other" : "other-blur"}
              placeholder="Other"
              onChange={props.handleAmountOther}
              onBlur={() => setOtherBlur(false)}
              onClick={() => {
                setBtnStyleValue("other");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector;
