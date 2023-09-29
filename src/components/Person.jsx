import React, { Component } from "react";

export class Person extends Component {
  render() {
    const { person } = this.props;
    return (
      <h2>
        My name is {person.name}, I am {person.age} years old and I know{" "}
        {person.skill}
      </h2>
    );
  }
}

export default Person;
