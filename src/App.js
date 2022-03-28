import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hello World!"
    };
  }
  changeTitle(title = "Bye") {
    this.setState({ title });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>Change title</button>
      </div>
    );
  }
}
