import React, { useState, useContext, useEffect } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurName] = useState("Petter");
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();

  useEffect(() => {
    document.title = name + " " + surname;
  })



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
      <Row label="Language">
        <input value={locale} disabled />
      </Row>
      <Row label="Width">
        <input value={width} disabled />
      </Row>
    </section>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return width;
}