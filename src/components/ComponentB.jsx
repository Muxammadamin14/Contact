import React, { Component } from "react";

export class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jane Smith",
    };

    console.log("ComponentB constructor");
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("ComponentB shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("ComponentB componentDidUpdate");
  }

  render() {
    console.log("ComponentB render");
    return <div>ComponentB</div>;
  }
}

export default ComponentB;
