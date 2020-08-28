import React, { useState } from "react";
import Selector from "../selector/Selector";
import UserInput from "../userInputs/UserInputs";
import { createDonation } from "../../services/donations";
import { useHistory } from "react-router-dom";
export const DisableRadio = React.createContext();
export const amount = React.createContext();

function Form() {
  let [disabledRadioValue, setDisable] = useState(true);
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
    setDisable(false);
    setChoices({
      ...choices,
      amount: e.target.value,
    });
  };

  const handleAmountOther = (e) => {
    setDisable(false);
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
    console.log(data);
    history.push(`/confirmation/${data._id}`);
  };

  return (
    <>
      <DisableRadio.Provider value={disabledRadioValue}>
        <Selector
          handleTypeClick={handleTypeClick}
          handleAmountClick={handleAmountClick}
          handleAmountOther={handleAmountOther}
        />
        <UserInput handleChange={handleChange} addNew={donate} />
      </DisableRadio.Provider>
    </>
  );
}

export default Form;
