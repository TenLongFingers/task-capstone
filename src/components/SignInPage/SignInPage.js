import React from "react";
import SignInBox from "./SignInBox/SignInBox";
import SignInButton from "./SignInBox/SignInButton";
import "./SignInPage.css";

function SignInPage() {
  return (
    <div className="sign-in">
      <h1>Welcome to my high-stimulus productivity app!</h1>
      <SignInBox />
      <SignInButton />
    </div>
  );
}

export default SignInPage;
