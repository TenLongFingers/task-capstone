import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { login } from "./authController";
import AuthContext from "../../../context/AuthProvider";
// import AuthContext from "~/context/AuthProvider.js";
import axios from "axios";

// import axios from "~/api/axios.js";
const LOGIN_URL = "/auth";

const SignInBox = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  //This success one is going to be replaced by a router to get to the next page, but for now we're just tracking if it was successful
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submission successful");
    console.log(); //RIGHT HERE trying to connect front end to server, just trying to console log the login app.post. Then I want to console.log my whole database, just to make sure I"m pulling it right. Then deconstruct it and get the username and password.

    // try {
    //   const response = await axios.post(LOGIN_URL, { user, pwd });
    //   console.log(response);
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, pwd, roles, accessToken });
    //   setUser("");
    //   setPwd("");
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Missing username or password");
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <>
      {success ? (
        <section>
          <h1> You are logged in!</h1>
          <p>
            <a href="homepage"> Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}{" "}
          </p>

          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign in</button>
          </form>
          <p>Just want to test out the app?</p>
          <p> Username: Friend </p>
          <p>Password: Test</p>
        </section>
      )}
    </>
  );
};

export default SignInBox;
