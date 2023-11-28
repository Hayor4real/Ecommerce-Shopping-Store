import { useState } from "react";
import "./BillValidation.css";

const BillValidation = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, value, pattern, required } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const isValid = () => {
    if (!required) {
      return true;
    }
    if (pattern && value) {
      const regex = new RegExp(pattern);
      return regex.test(value);
    }
    return !!value;
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...props}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => props.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      {!isValid() && <span>{errorMessage}</span>}
    </div>
  );
};

export default BillValidation;
