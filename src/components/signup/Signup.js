import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">Sign up</div>
        <div className="input-group">
          <p>Cat username</p>
          <div className="signup-input-container">
            <input
              className="signup-input"
              type="text"
              placeholder="Cat username"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Email</p>
          <div className="signup-input-container">
            <input
              className="signup-input"
              type="text"
              placeholder="Email"
            ></input>
          </div>
        </div>
        <div className="input-group">
          <p>Password</p>
          <div className="signup-input-container">
            <input
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
              className="signup-input"
              type="text"
              placeholder="Confirm password"
            ></input>
          </div>
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
