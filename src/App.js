import { useState } from "react";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Login />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
