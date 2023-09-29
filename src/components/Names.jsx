import React, { Component } from "react";

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["John", "Alex", "Bob"],
    };
  }

  render() {
    const { names } = this.state;

    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
    return (
      <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {/* {names.map((name, index) => (
          <h2 key={index}>
            {index + 1}. {name}
          </h2>
        ))} */}

        {nameList}
      </div>
    );
  }
}

export default Names;
