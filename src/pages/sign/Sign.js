import React from "react";
import "./Sign.scss";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";
const Sign = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default Sign;
