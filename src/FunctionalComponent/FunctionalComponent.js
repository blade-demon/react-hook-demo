import React, { useState, useEffect, useContext } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surName, setSurName] = useState("Petter");
  const [width, setWidth] = useState(window.innerWidth);
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = name + ' ' + surName;
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

  function handleResize() {
    return setWidth(window.innerWidth);
  }

  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Row>
      <Row label="SurName">
        <input value={surName} onChange={(e) => setSurName(e.target.value)} />
      </Row>
      <Row label="Width">
        <input value={width} disabled />
      </Row>
      <Row label="Locale">
        <input value={locale} disabled />
      </Row>
    </section>
  );
}
