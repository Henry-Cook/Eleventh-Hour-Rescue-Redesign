import React from "react";
import paypal from "../../assets/images/donate/paypal2.png";
import "./paypalConfirmation.css";
import { Checkmark } from "react-checkmark";
import { Link } from "react-router-dom";

function PaypalConfirm() {
  return (
    <>
      <div className="bar">
        <img className="paypal-logo" src={paypal} alt="paypal" />
      </div>
      <div className="main-container">
        <div className="confirmation-box">
          <div className="white-box">
            <Checkmark size={128} color="green" />
            <p className="confirm-text">{`You’ve sent $10.00 to fundraising@ehrdogs.org`}</p>
          </div>
          <div className="nav-back">
            <Link to="/donate" className="back-to-donate">
              Send More Money
            </Link>
            <Link to="/" className="back-to-home">
              Return to 11th Hour Animal Rescue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaypalConfirm;
