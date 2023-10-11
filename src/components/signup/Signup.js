import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">Sign up</div>
        <div className="input-container">
          <input
            className="signup-input"
            type="text"
            placeholder="Cat username"
          ></input>
        </div>
        <div className="input-container">
          <input
            className="signup-input"
            type="text"
            placeholder="Email"
          ></input>
        </div>
        <div className="input-container">
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="input-container">
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm password"
          ></input>
        </div>
        <div className="signup-buttons">
          <button className="signup-button">Sign up</button>
        </div>
        {/* <div className="bottom-links">
          <a className="bottom-link" href="">
            Don't have an account?
          </a>
          <a className="bottom-link" href="">
            Forgotten password?
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
