import React /*, { useState }*/ from "react";
import { Link /*, useNavigate*/ } from "react-router-dom";
import "./Login.css";
// import { auth } from "./Firebase";

function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const history = useNavigate();
  //   const signIn = (e) => {
  //     e.preventDefault();

  //     //firebase stuff happens here.
  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then((auth) => {
  //         history.push("/");
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  //   const register = (e) => {
  //     e.preventDefault();

  //     //firebase stuff happens here.
  //     auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((auth) => {
  //         console.log(auth);
  //         if (auth) {
  //           history.push("/");
  //         }
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            // value={password}
            // onChange={(p) => setPassword(p.target.value)}
          />
          <button
            type="submit"
            // onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By Signing in you accept to Shop. terms of use.</p>
        <button className="login__registerButton">Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
