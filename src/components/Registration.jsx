import React, { Component } from "react";

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      skill: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      console.log(this.state);
    } else {
      alert("Passwords do not match!");
    }
  };

  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password2">Confirm password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <select name="skill" id="skill" onChange={this.handleChange}>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
