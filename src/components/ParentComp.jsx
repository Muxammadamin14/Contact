import React, { Component } from "react";
import ChildComp from "./ChildComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
      },
    };
  }

  handleClick = (nm) => {
    this.setState({
      person: {
        name: nm,
      },
    });
  };

  render() {
    console.log(this.state.person);
    return (
      <div>
        <h1>Parent component</h1>
        <ChildComp handleClick={this.handleClick} />
      </div>
    );
  }
}

export default ParentComp;
