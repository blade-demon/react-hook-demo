import React from "react";
import Row from "../Row/Row";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mary",
      surName: "Petter",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurNameChange = this.handleSurNameChange.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surName;
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

  render() {
    return (
      <section>
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleNameChange} />
        </Row>
        <Row label="SurName">
          <input value={this.state.surName} onChange={this.handleSurNameChange} />
        </Row>
      </section>
    );
  }
}
