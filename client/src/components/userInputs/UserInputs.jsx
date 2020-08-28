import React, { useState, useContext } from "react";
import { DisableRadio } from "../form/Form";
import "./userInputs.css";
import states from "./state";
import addSpace from "../../utils/addSpace";
import paypal from "../../assets/images/donate/paypal2.png";
import CC from "../../assets/images/donate/cc.png";
import asterix from "../../assets/images/donate/Red Asterisk@3x.png";
import { useHistory } from "react-router-dom";

function UserInputs(props) {
  let history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const disabledRadioBool = useContext(DisableRadio);

  const handleRadio = (e) => {
    if (e.target.value === "paypal") {
      setDisabled(true);
      setBtnDisabled(false);
    } else if (e.target.value === "card") {
      setDisabled(false);
      setBtnDisabled(false);
    }
  };

  const handlePaypalclick = () => {
    history.push(`/paypalConfirm`);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={props.addNew}>
          <div className="paypal-choice">
            <input
              className="paypal-radio"
              type="radio"
              value="paypal"
              onClick={(e) => {
                handleRadio(e);
                handlePaypalclick();
              }}
              name="select"
              disabled={disabledRadioBool === true ? true : false}
            />
            <p className="paypal-text">PayPal</p>
            <img src={paypal} alt="paypal_img" className="paypal-img" />
          </div>
          <div className="credit-card-choice">
            <input
              className="card-radio"
              type="radio"
              value="card"
              onClick={handleRadio}
              name="select"
              disabled={disabledRadioBool === true ? true : false}
            />

            <p className="card-text">Credit Card or Debit Card</p>
            <img src={CC} alt="paypal_img" className="CC-img" />
          </div>

          <div className="card-information">
            <input
              disabled={disabled}
              className="number"
              onChange={props.handleChange}
              name="number"
              onKeyDown={addSpace}
              required
              placeholder="Credit/Debit Card Number"
              type="text"
              maxlength="19"
              autoComplete="off"
            ></input>
            {/* <p className="asterix">*</p> */}
            <div className="card-verify">
              <input
                disabled={disabled}
                className="verify-one"
                onChange={props.handleChange}
                name="cvv"
                type="text"
                required
                placeholder="CVV"
                maxlength="3"
              />
              {/* <p className="asterix">*</p> */}
              <input
                disabled={disabled}
                className="verify-two"
                onChange={props.handleChange}
                name="expiration"
                type="text"
                required
                placeholder="MM/YY"
                maxlength="5"
              />
              {/* <p className="asterix">*</p> */}
            </div>
          </div>
          <div className="billing-info">
            <h3 className="billing-info-title">Billing Information</h3>
            <div className="inputs">
              <div className="card-verify">
                <input
                  disabled={disabled}
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                />
                <input
                  disabled={disabled}
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
                  disabled={disabled}
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="address"
                  required
                  placeholder="Address"
                />
                <input
                  disabled={disabled}
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
                  disabled={disabled}
                  className="verify-one"
                  onChange={props.handleChange}
                  type="text"
                  name="city"
                  required
                  placeholder="City"
                />
                <input
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
            <button
              className="donate-btn"
              type="submit"
              disabled={btnDisabled}
              id="donate-btn"
            >
              DONATE NOW
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserInputs;
