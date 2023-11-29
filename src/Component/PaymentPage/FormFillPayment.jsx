import React, { useEffect, useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";

import PaymentValidation from "./PaymentValidation";

import "./Payment.css";

const FormFillPayment = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(PaymentValidation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return (
    <div className="content">
      <div className="app-wrapper">
        <div>
          <h3 className="title">Payment details</h3>
        </div>
        <form className="form-wrapper">
          {/* Payment Icons */}
          <div className="payment-icons">
            <FaCcVisa size={40} />
            <FaCcMastercard size={40} />
            <FaCcAmex size={40} />
            <FaPaypal size={40} />
          </div>

          <div className="name">
            <label className="label">Name of Card</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="submitForm">
            <button onClick={handleFormSubmit}>Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFillPayment;
