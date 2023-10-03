import "./login.css";

const Login = ({ setLoggedIn }) => {
  return (
    <div className="">
      <div className="greeting-container">
        <div className="greeting">Welcome Back.</div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">Login</div>
          <div className="input-container">
            <input
              className="login-input"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="input-container">
            <input
              className="login-input"
              type="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="login-buttons">
            <button className="login-button" onClick={() => setLoggedIn(true)}>
              Login
            </button>
          </div>
          <div className="bottom-links">
            <a className="bottom-link" href="">
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
    </div>
  );
};

export default Login;
