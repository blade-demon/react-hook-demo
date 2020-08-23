import React, { useState, useContext, useEffect } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurName] = useState("Petter");
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  useEffect(() => {
    document.title = name + " " + surname;
  })

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleSurNameChange(e) {
    setSurName(e.target.value);
  }

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurNameChange} />
      </Row>
      <Row label="Language">
        <input value={locale} disabled />
      </Row>
      <Row label="Width">
        <input value={width} disabled />
      </Row>
    </section>
  );
}
