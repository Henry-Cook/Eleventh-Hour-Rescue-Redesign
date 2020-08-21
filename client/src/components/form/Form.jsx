import React, { useState } from "react";
import Selector from "../../components/selector/Selector";
import UserInput from "../userInputs/UserInputs";

function Form() {
  const [selection, setSelection] = useState({
    type: "",
    amount: "",
  });
  return (
    <>
      <Selector />
      <UserInput />
    </>
  );
}

export default Form;
