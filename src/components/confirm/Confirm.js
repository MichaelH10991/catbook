import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirm, authenticate } from "../../services/authenticate";
import api from "../../api";
import Cookies from "universal-cookie";

const Confirm = ({ userInfo }) => {
  // const [userInfo, setUserInfo] = useState({});
  const [confirmationCode, setConfirmationCode] = useState("");

  const cookies = new Cookies();
  const Navigate = useNavigate();

  const handleClick = async () => {
    confirm(userInfo.email, confirmationCode);
    const data = await authenticate(userInfo.email, userInfo.password);
    console.log(data);
    await api.createUser(
      { ...userInfo, id: data.idToken.payload.sub },
      data.idToken.jwtToken
    );
    cookies.set("idToken", data.idToken.jwtToken, { path: "/" });
    cookies.set("accessToken", data.accessToken.jwtToken, { path: "/" });
    Navigate("/dashboard");
  };
  console.log(userInfo);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">Email Confirmation</div>
        <div className="input-group">
          {/* <p>Cat username</p> */}
          <div className="signup-input-container">
            <input
              value={confirmationCode}
              className="signup-input"
              onChange={(event) => setConfirmationCode(event.target.value)}
              type="text"
              placeholder="Confirmation code"
            ></input>
          </div>
        </div>
        <div className="signup-buttons">
          <button onClick={handleClick} className="signup-button">
            Submit
          </button>
        </div>
        <div className="signup-buttons">
          <button onClick={() => {}} className="signup-button">
            Resend Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
