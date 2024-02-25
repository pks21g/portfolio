import React, { useState } from "react";
import FormInput from "./FormInput";
import { formData } from "../../data/formdata";
import "./contactForm.css";

function ContactForm() {
  const [msg, setMsg] = useState("");
  const [values, setvalues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...values});
    setMsg(`Thank you for regestering, ${values.name}!!`);
    clearForm()
  };
  const clearForm = (values) => {
    setvalues( {username:"", email:"", birthday:"", password:"", confirmPassword:""})
  }
  const onChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <div className="contact-section">
      <form className="form" onSubmit={handleSubmit}>
        {msg}
        <h1>Register</h1>
        {formData.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.value]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
