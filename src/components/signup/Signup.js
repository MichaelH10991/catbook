import "./signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import userpool from "../../userpool";

const Signup = ({ userInfo, setUserInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const Navigate = useNavigate();

  const formInputChange = (formField, value) => {
    setUserInfo((prevUserInfo) => {
      return { ...prevUserInfo, [formField]: value };
    });
  };

  console.log(userInfo);

  const handleClick = async () => {
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: "email",
        Value: userInfo.email,
      })
    );
    let username = userInfo.email;
    userpool.signUp(
      username,
      userInfo.password,
      attributeList,
      null,
      async (err, data) => {
        if (err) {
          console.log(err);
          alert("Couldn't sign up");
        } else {
          alert("User Added Successfully");
          // Navigate("/dashboard");
          Navigate("/confirm");
        }
      }
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">Sign up</div>
        <div className="input-group">
          <p>Cat username</p>
          <div className="signup-input-container">
            <input
              value={userInfo.username}
              className="signup-input"
              onChange={(event) =>
                formInputChange("username", event.target.value)
              }
              type="text"
              placeholder="Cat username"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Cat name</p>
          <div className="signup-input-container">
            <input
              value={userInfo.name}
              className="signup-input"
              onChange={(event) => formInputChange("name", event.target.value)}
              type="text"
              placeholder="Cat name"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Email</p>
          <div className="signup-input-container">
            <input
              value={userInfo.email}
              className="signup-input"
              onChange={(event) => formInputChange("email", event.target.value)}
              type="text"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Password</p>
          <div className="signup-input-container">
            <input
              value={userInfo.password}
              onChange={(event) =>
                formInputChange("password", event.target.value)
              }
              className="signup-input"
              type="text"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Confirm password</p>
          <div className="signup-input-container">
            <input
              value={userInfo.passwordConfirm}
              className="signup-input"
              type="text"
              onChange={(event) =>
                formInputChange("passwordConfim", event.target.value)
              }
              placeholder="Confirm password"
            ></input>
          </div>
        </div>
        <div className="signup-buttons">
          <button onClick={handleClick} className="signup-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
