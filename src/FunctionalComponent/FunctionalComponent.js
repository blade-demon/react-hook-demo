import React, { useState, useEffect } from "react";
import Row from "../Row/Row";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surName, setSurName] = useState("Petter");

  useEffect(() => {
    document.title = name + ' ' + surName;
  }, []);

  return (
    <section>
      <Row label="Name">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Row>
      <Row label="SurName">
        <input value={surName} onChange={(e) => setSurName(e.target.value)} />
      </Row>
    </section>
  );
}
