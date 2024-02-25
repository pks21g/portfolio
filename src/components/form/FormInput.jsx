import React, {useState} from "react";

function FormInput(props) {
  const { id, label, onChange, onBlur, labelClass, errorMessage, ...inputprops } =
    props;
    const [focused, setFocused] = useState(false);
    const handleOnBlur = (e) => {
      setFocused(true);
    }
  return (
    <div className="input-group">
      <label htmlFor={label} className={labelClass}>
        {label}
        <span> *</span>
      </label>
      <input id={id} onChange={onChange} onBlur={handleOnBlur} focused={focused.toString()} {...inputprops} />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
