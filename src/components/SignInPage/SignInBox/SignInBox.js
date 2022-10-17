import React from "react";
import { useRef, useState, useEffect, useContext } from "react";

const SignInBox = () => {
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
    userRef.current.focus();
  }, [user, pwd]);

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}{" "}
      </p>
      <h1>Sign In</h1>
      <form>
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
  );
};

export default SignInBox;
