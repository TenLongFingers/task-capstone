import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
// import AuthContext from "../../../context/AuthProvider";
// import AuthContext from "~/context/AuthProvider.js";
import { loginUser } from "../../../actions/action"; //It's not letting me access stuff outside of src, which I guess makes sense, so I don't know how import stuff happening on my server
import axios from "axios";

// import axios from "~/api/axios.js";
const LOGIN_URL = "/auth";

const SignInBox = () => {
  // const { setAuth } = useContext(AuthContext);
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

  //TRACK CHANGES IN INPUT
  //this is class syntax, needs to be changed to functional syntax
  // const changeHandler = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  //SUBMIT BUTTON FUNCTION
  const handleSubmit = (e, props) => {
    e.preventDefault();
    axios
      .post("/auth/login", { user, pwd })
      .then((res) => {
        console.log(res.data);
        console.log("login success");
        props.loginUser(res.data);
        props.history.push("/profile");
      })
      .catch((error) => alert(error, "Incorrect username and/or password"));
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

          <h1 className="sign-in-head">Sign In</h1>
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
          <p>Password: testtest123</p>
        </section>
      )}
    </>
  );
};

export default SignInBox;
