import React, { useState, useEffect, useContext } from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

function useDocumentTitle(initialValue) {
  useEffect(() => {
    document.title = initialValue;
  });
}

function useWindowWidth(initialValue) {
  const [width, setWidth] = useState(initialValue);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

export default function Greeting(props) {
  const name = useFormInput("Mary");
  const surName = useFormInput("Petter");
  const width = useWindowWidth(window.innerWidth);
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  useDocumentTitle(name.value + " " + surName.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="surName">
        <input {...surName} />
      </Row>
      <Row label="width">
        <input value={width} disabled />
      </Row>
      <Row label="width">
        <input value={locale} disabled />
      </Row>
    </section>
  );
}
