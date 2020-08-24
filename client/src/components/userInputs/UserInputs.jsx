import React, { useState } from "react";
import "./userInputs.css";
import states from "./state";
import addSpace from "../../utils/addSpace";

function UserInputs(props) {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="paypal-choice">
            <input className="paypal-radio" type="radio" />
            <p className="paypal-text">PayPal</p>
          </div>
          <div className="credit-card-choice">
            <input className="card-radio" type="radio" />

            <p className="card-text">Credit Card or Debit Card</p>
          </div>

          <div className="card-information">
            <input
              className="number"
              onChange={props.handleChange}
              name="number"
              onKeyDown={addSpace}
              required
              placeholder="Credit Card Number"
              type="text"
              maxlength="19"
              autoComplete="off"
            />
            <div className="card-verify">
              <input
                className="verify-one"
                onChange={props.handleChange}
                name="cvv"
                type="text"
                required
                placeholder="CVV"
              />
              <input
                className="verify-two"
                onChange={props.handleChange}
                name="expiration"
                type="text"
                required
                placeholder="MM/YY"
              />
            </div>
          </div>
          <div className="billing-info">
            <h3 className="billing-info-title">Billing Information</h3>
            <div className="inputs">
              <div className="card-verify">
                <input
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                />
                <input
                  className="verify-two"
                  onChange={props.handleChange}
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                />
              </div>
              <div className="card-verify">
                <input
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                />
                <input
                  className="verify-two"
                  onChange={props.handleChange}
                  type="text"
                  name="address2"
                  required
                  placeholder="Address 2"
                />
              </div>
              <div className="card-verify">
                <input
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="city"
                  required
                  placeholder="City"
                />
                <input
                  className="verify-two"
                  onChange={props.handleChange}
                  type="text"
                  name="zip"
                  required
                  placeholder="Zipcode"
                />
              </div>
              <div className="card-verify">
                <select
                  className="state-select"
                  name="state"
                  onChange={props.handleChange}
                  required
                >
                  <option value="">Select</option>
                  {states.map((state) => {
                    return <option value={state}>{state}</option>;
                  })}
                </select>
              </div>
              <div className="card-verify">
                <input
                  placeholder="Email Address"
                  className="input-email"
                  onChange={props.handleChange}
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="donate-btn-div">
            <button className="donate-btn" type="submit">
              DONATE NOW
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserInputs;
