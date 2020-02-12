import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import StuffTodo from "./StuffTodo";
import "./styles.css";

const BACKEND_URL = "https://mfjcy.sse.codesandbox.io/";

export default function App() {
  const [values, setValues] = useState({});

  const saveForm = () => {
    const sendAction = fetch(BACKEND_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    sendAction.then(() => {
      alert("Your message has been sent!");
      setValues({ name: "", message: "" });
    });
    sendAction.catch(err => {
      alert(err.message);
    });
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <ContactForm values={values} setValues={setValues} onSubmit={saveForm} />
      <hr />
      <StuffTodo backend={BACKEND_URL} />
    </div>
  );
}
