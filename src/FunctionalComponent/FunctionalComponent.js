import React, { useState, useEffect } from "react";
import Row from "../Row/Row";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surName, setSurName] = useState("Petter");
  const [width, setWidth] = useState(window.innerWidth);

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
    <section>
      <Row label="Name">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Row>
      <Row label="SurName">
        <input value={surName} onChange={(e) => setSurName(e.target.value)} />
      </Row>
      <Row label="Width">
        <input value={width} disabled />
      </Row>
    </section>
  );
}
