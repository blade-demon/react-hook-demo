import React from "react";
import Row from "../Row/Row";
import { ThemeContext, LocaleContext } from "../Context";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
      surname: "Petter",
      locale: "en",
      width: window.innerWidth,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSurNameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <section className={theme}>
            <Row label="Name">
              <input value={this.state.name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input
                value={this.state.surname}
                onChange={this.handleSurNameChange}
              />
            </Row>
            <LocaleContext.Consumer>
              {(locale) => (
                <Row label="locale">
                  <input value={locale} disabled />
                </Row>
              )}
            </LocaleContext.Consumer>
            <Row label="Width">
              <input value={this.state.width} disabled />
            </Row>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
