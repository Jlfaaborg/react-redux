import React from "react";
import { addUser } from "../../redux/action";
import { User } from "../../types";

const mapStateToProps = (state: any) => {
  return { user: state.User,
  onSubmit:  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleSubmit: (user: User) => {
      dispatch(addUser(user));
    }
  };
};
