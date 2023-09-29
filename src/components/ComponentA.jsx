import React, { Component } from "react";
import ComponentB from "./ComponentB";

export class ComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John Doe",
    };

    console.log("ComponentA constructor");
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "Alexander Pushkin",
    });
  };

  shouldComponentUpdate() {
    console.log("ComponentA shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("ComponentA componentDidUpdate");
  }

  render() {
    console.log("ComponentA render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeState}>Change state</button>
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA;
