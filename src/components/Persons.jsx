import React, { Component } from "react";
import Person from "./Person";

export class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: "Bruce",
          age: 25,
          skill: "React",
        },
        {
          id: 2,
          name: "Clark",
          age: 28,
          skill: "Angular",
        },
        {
          id: 3,
          name: "Diana",
          age: 22,
          skill: "Vue",
        },
      ],
    };
  }

  render() {
    const { persons } = this.state;
    return (
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    );
  }
}

export default Persons;
