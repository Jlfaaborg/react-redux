import React from "react";
import { connect } from 'react-redux'
import { addUser } from "../../redux/action";
import { User } from "../../types";
import form from "../presentational/form";

const mapStateToProps = (state: any) => {
  return { user: state.User }
}


const HomeLink = connect(mapStateToProps)(form);

export default HomeLink