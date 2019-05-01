import React, { Component, FormEvent } from "react";
import { User } from "../../types";
import store from "../../redux/store";
import { ADD_USER } from "../../redux/action";

class form extends Component {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.dir(event);
    // store.dispatch({
    //   type: ADD_USER,
    //   user: { userName: event.target.value.userName, password: event.target.value.password }
    // })
  };

  handleChange = (event: any) => {
    this.setState({ [event.target]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit}>
        <label htmlFor="userName" />
        User Name
    <input type="text" name="userName" id="userName" onChange={this.handleChange} />
        <label htmlFor="password" />
        <br />
        Password
    <input type="text" name="password" id="password" onChange={this.handleChange} />
        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default form