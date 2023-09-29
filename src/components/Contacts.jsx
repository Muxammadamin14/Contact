import React, { Component } from "react";
import ContactForm from "./ContactForm";

export class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          sex: "male",
        },
        {
          id: 2,
          firstName: "Bruce",
          lastName: "Wayne",
          email: "bruce@example.com",
          phone: "425-056-5264",
          sex: "male",
        },
        {
          id: 3,
          firstName: "Diana",
          lastName: "Smith",
          email: "diana@example.com",
          phone: "953-053-3732",
          sex: "female",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactForm />
      </div>
    );
  }
}

export default Contacts;
