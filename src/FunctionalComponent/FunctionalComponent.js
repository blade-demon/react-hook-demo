import React, { useState, useContext } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurName] = useState("Petter");
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSurNameChange(e) {
    setSurName(e.target.value);
  }

  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurNameChange} />
      </Row>
      <Row label="language">
        <input value={locale} disabled />
      </Row>
    </section>
  );
}
