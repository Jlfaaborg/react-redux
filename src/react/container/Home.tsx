import React from "react";
import { connect } from 'react-redux'
import { addUser } from "../../redux/action";
import { User } from "../../types";
import Form from "../presentational/Form";

const mapStateToProps = (state: any) => {
  return { userName: state[0].userName, password: state[0].password }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    submit: (user: User) => {
      dispatch(addUser([user]))
    }
  }
}

const HomeLink = connect(mapStateToProps, mapDispatchToProps)(Form);

export default HomeLink