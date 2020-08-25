import React, { useState } from "react";
import Selector from "../../components/selector/Selector";
import UserInput from "../userInputs/UserInputs";
import { createDonation } from "../../services/donations";

function Form() {
  // const [selection, setSelection] = useState("");
  // console.log(selection);
  const [choices, setChoices] = useState({
    type: "monthly",
    amount: "",
  });

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

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addNew = (e) => {
    e.preventDefault();
    let tempOb = { ...choices, ...userInfo };
    // console.log(tempOb);
    // setSelection({ tempOb });
    console.log(createDonation(tempOb));
  };

  return (
    <>
      <Selector
        handleTypeClick={handleTypeClick}
        handleAmountClick={handleAmountClick}
      />
      <UserInput handleChange={handleChange} addNew={addNew} />
    </>
  );
}

export default Form;
