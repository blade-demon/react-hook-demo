import React, { useState } from "react";
import Row from "../Row/Row";

export default function Greeting(props) {
  const [name, setName] = useState("Mary");

  return (
    <section>
      <Row label="Name">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </Row>
    </section>
  );
}
