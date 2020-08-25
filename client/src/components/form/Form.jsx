import React, { useState } from "react";
import Selector from "../../components/selector/Selector";
import UserInput from "../userInputs/UserInputs";
import { createDonation } from "../../services/donations";
import { useHistory, Redirect } from "react-router-dom";

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

  let history = useHistory();

  const donate = async (e) => {
    e.preventDefault();
    const tempOb = { ...choices, ...userInfo };
    const data = await createDonation(tempOb);
    history.push(`/confirmation/${data._id}`);
  };

  return (
    <>
      <Selector
        handleTypeClick={handleTypeClick}
        handleAmountClick={handleAmountClick}
      />
      <UserInput handleChange={handleChange} addNew={donate} />
    </>
  );
}

export default Form;
