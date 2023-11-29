import { useContext } from "react";
import React, { useState } from "react";

import { Cartcontext } from "../../context/Context";

import FormFillPayment from "./FormFillPayment";
import Success from "./Success";
const Payment = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
    alert("Payment Successful");
    dispatch({ type: "REMOVE ALL ITEMS" });
    window.location.replace("/");
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <FormFillPayment submitForm={submitForm} />
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Payment;
