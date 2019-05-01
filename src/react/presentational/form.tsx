import React, { Component } from "react";
import { User } from "../../types";
import store from "../../redux/store";
import { ADD_USER } from "../../redux/action";

class Form extends React.Component<{}, { userName?: any, password?: any }> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userName: props.userName,
      password: props.password
    }
  }


  handleSubmit = (event: any) => {
    event.preventDefault()
    const user = {
      userName: this.state.userName,
      password: this.state.password
    }

    store.dispatch({
      type: ADD_USER,
      user: user
    })
  };

  handleChange = (event: { target: { name: any; value: any; }; }) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="userName" />
        User Name
    <input type="text" name="userName" id="userName" onChange={this.handleChange} />
        <label htmlFor="password" />
        <br />
        Password
    <input type="text" name="password" id="password" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
      </form>
    )
  }
}

export default Form