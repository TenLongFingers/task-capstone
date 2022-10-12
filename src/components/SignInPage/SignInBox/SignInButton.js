import React from "react";
import { useNavigate } from "react-router-dom";

function SignInButton() {
  const navigate = useNavigate();

  function handleSignInRequest() {
    navigate("/homepage");
  }

  return (
    <div className="sign-in-button">
      <button onClick={handleSignInRequest}>Sign In</button>
    </div>
  );
}

export default SignInButton;
