import React from "react";
import { User } from "../../types";

const form = ({ user, onSubmit }: any) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="userName" />
    User Name
    <input type="text" name="userName" id="userName" value={user.userName} />
    <label htmlFor="password" />
    Password
    <input type="text" name="password" id="password" value={user.password} />
  </form>
);
