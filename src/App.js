import { useState } from "react";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Dashboard />}
    </div>
  );
}

export default App;
