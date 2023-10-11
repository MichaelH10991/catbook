import { useState } from "react";
import Cookies from "universal-cookie";

import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { authenticate } from "../../services/authenticate";
import api from "../../api";
import userpool from "../../userpool";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const Navigate = useNavigate();
  const cookies = new Cookies();

  const formInputChange = (formField, value) => {
    if (formField === "email") {
      setEmail(value);
    }
    if (formField === "password") {
      setPassword(value);
    }
  };

  const handleClick = async () => {
    try {
      const data = await authenticate(email, password);
      cookies.set("idToken", data.idToken.jwtToken, { path: "/" });
      cookies.set("accessToken", data.accessToken.jwtToken, { path: "/" });
      Navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="greeting-container">
        <div className="greeting">Welcome Back, Kitty</div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">Login</div>
          <div className="input-container">
            <input
              value={email}
              onChange={(event) => formInputChange("email", event.target.value)}
              className="login-input"
              type="text"
              placeholder="Catname or Email"
            ></input>
          </div>
          <div className="input-container">
            <input
              value={password}
              onChange={(event) =>
                formInputChange("password", event.target.value)
              }
              className="login-input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="login-button-container">
            <button className="login-button" onClick={handleClick}>
              <div>Login</div>
            </button>
            {/* <Link
              className="login-button"
              to={`dashboard`}
              onClick={handleClick}
            >
              <div>Login</div>
            </Link> */}
          </div>
          <div className="bottom-links">
            <a className="bottom-link" href="/signup">
              Don't have an account?
            </a>
            <a className="bottom-link" href="">
              Forgotten password?
            </a>
            {/* <button className="">Sign up</button>
          <button className="">Forgotten password</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
