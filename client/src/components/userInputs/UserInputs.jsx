import React, { useState } from "react";
import "./userInputs.css";

function UserInputs() {
  const [userInfo, setUserInfo] = useState({
    cardCardNumber: "",
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

  return (
    <>
      <div className="form-container">
        <form>
          <div className="paypalChoice">
            <input type="radio" />
            <p>PayPal</p>
          </div>
          <div className="creditCardChoice">
            <input type="radio" />
            <p>Credit Card</p>
          </div>
          <div className="cardInformation">
            <input
              onChange={handleChange}
              name="cardCardNumber"
              type="password"
              required
            />
            <input
              onChange={handleChange}
              name="cvv"
              type="text"
              required
              onChange={handleChange}
            />
            <input
              onChange={handleChange}
              name="expiration"
              type="text"
              required
            />
          </div>
          <div className="billingInfo">
            <h3>Billing Information</h3>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="address"
              required
            />
            <input
              onChange={handleChange}
              type="text"
              name="address2"
              required
            />
            <input onChange={handleChange} type="text" name="city" required />
            <input onChange={handleChange} type="text" name="zip" required />
            <select name="state" onChange={handleChange} required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input onChange={handleChange} type="email" required />
          </div>
          <button type="submit">Donate Now</button>
        </form>
      </div>
    </>
  );
}

export default UserInputs;
