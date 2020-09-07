import React, { useState, useEffect, useContext } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

function useWindowWidth(initialValue) {
  const [width, setWidth] = useState(initialValue);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    return setWidth(window.innerWidth);
  }

  return width;
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function useDocumentTitle(initialValue) {
  useEffect(() => {
    document.title = initialValue;
  });
}

export default function Greeting(props) {
  const name = useFormInput("Mary");
  const surName = useFormInput("Petter");
  const width = useWindowWidth(window.innerWidth);
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);

  useDocumentTitle(name.value + " " + surName.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="SurName">
        <input {...surName} />
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
