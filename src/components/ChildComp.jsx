import React, { Component } from "react";

export class ChildComp extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "John",
  //     };
  //   }

  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <h1>ChildComp</h1>
        <p>This is child component</p>
        <button onClick={() => handleClick("Bruce")}>Click Me</button>
      </div>
    );
  }
}

export default ChildComp;
