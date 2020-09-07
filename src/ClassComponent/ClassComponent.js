import React from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
      surName: "Petter",
      width: window.innerWidth,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surName;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surName;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSurNameChange(e) {
    this.setState({
      surName: e.target.value,
    });
  }

  handleWidthChange(width) {
    this.setState({
      width,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <section className={theme}>
              <Row label="Name">
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Row>
              <Row label="SurName">
                <input
                  value={this.state.surName}
                  onChange={this.handleSurNameChange}
                />
              </Row>
              <Row label="Width">
                <input
                  value={this.state.width}
                  onChange={this.handleWidthChange}
                />
              </Row>
              <LocaleContext.Consumer>
                {(locale) => {
                  return (
                    <Row label="Locale">
                      <input value={locale} disabled />
                    </Row>
                  );
                }}
              </LocaleContext.Consumer>
            </section>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
