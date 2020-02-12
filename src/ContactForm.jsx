import React from "react";

const ContactForm = ({ values, setValues, onSubmit }) => (
  <form
    onSubmit={evt => {
      evt.preventDefault();
      onSubmit();
    }}
  >
    <label>
      Name:
      <input
        value={values.name}
        onChange={evt => setValues({ ...values, name: evt.target.value })}
      />
    </label>
    <label>
      Description:
      <textArea
        value={values.message}
        onChange={evt => {
          setValues({ ...values, message: evt.target.value });
        }}
      />
    </label>
    <button type="submit">Send Form </button>
  </form>
);

export default ContactForm;
