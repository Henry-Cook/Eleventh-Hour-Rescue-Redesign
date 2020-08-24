import React, { useState } from "react";
import "./userInputs.css";
import states from "./state";

function UserInputs() {
  const [userInfo, setUserInfo] = useState({
    number: "",
    cvv: "",
    expiration: "",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
    state: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addSpace = (e) => {
    let input = e.target.value;
    if (input.length === 4 && e.keyCode !== 8) {
      e.target.value = `${input} `;
    } else if (input.length === 9 && e.keyCode !== 8) {
      e.target.value = `${input} `;
    } else if (input.length === 14 && e.keyCode !== 8) {
      e.target.value = `${input} `;
    }
  };

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
              onChange={handleChange}
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
                onChange={handleChange}
                name="cvv"
                type="text"
                required
                onChange={handleChange}
                placeholder="CVV"
              />
              <input
                className="verify-two"
                onChange={handleChange}
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
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                />
                <input
                  className="verify-two"
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                />
              </div>
              <div className="card-verify">
                <input
                  className="verify-one"
                  onChange={handleChange}
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                />
                <input
                  className="verify-two"
                  onChange={handleChange}
                  type="text"
                  name="address2"
                  required
                  placeholder="Address 2"
                />
              </div>
              <div className="card-verify">
                <input
                  className="verify-one"
                  onChange={handleChange}
                  type="text"
                  name="city"
                  required
                  placeholder="City"
                />
                <input
                  className="verify-two"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  type="email"
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
