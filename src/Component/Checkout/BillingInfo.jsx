import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BillInfo.css";

import BillValidation from "./BillValidation";

const BillingInfo = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      errorMessage:
        "firstName should be 3-16 characters and shouldn't include any special character!",
      label: "Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      errorMessage:
        "lastname should be 3-16 characters and shouldn't include any special character!",
      label: "Lastname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "country",
      type: "text",
      placeholder: "country",
      errorMessage:
        "country should be 3-16 characters and shouldn't include any special character!",
      label: "Country",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "address",
      errorMessage:
        "address should be 3-16 characters and shouldn't include any special character!",
      label: "Address",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "city",
      errorMessage:
        "city should be 3-16 characters and shouldn't include any special character!",
      label: "City",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 6,
      name: "state",
      type: "text",
      placeholder: "state",
      errorMessage:
        "state should be 3-16 characters and shouldn't include any special character!",
      label: "State",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 7,
      name: "zipcode",
      type: "text",
      placeholder: "zipcode",
      errorMessage:
        "Zipcode should be 1-5 characters and shouldn't include any special character!",
      label: "Zipcode",
      pattern: "^[A-Za-z0-9]{1,5}$",
      required: true,
    },
    {
      id: 8,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 9,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "Birthday",
    },
    {
      id: 10,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 11,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const isValidForm = () => {
    return inputs.every((input) => {
      if (input.required) {
        return !!values[input.name];
      }
      return true;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataIsCorrect(isValidForm());
    if (isValidForm()) {
      // Navigate to the next page, e.g., using react-router-dom
      // history.push("/payment");
      history.push("/summary", { formData });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-form">
      <form onSubmit={handleSubmit}>
        <h1>Billing Information</h1>
        {inputs.map((input) => (
          <BillValidation
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to="/payment">
          <button className="submit" type="submit" disabled={!isValidForm()}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default BillingInfo;
