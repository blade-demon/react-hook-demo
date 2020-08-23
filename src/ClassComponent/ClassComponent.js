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
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
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
                  <input value={locale} disabled/>
                </Row>
              )}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
