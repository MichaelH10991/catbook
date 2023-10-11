import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import userpool from "./userpool";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";
import Confirm from "./components/confirm/Confirm";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // return (
  //   <div className="App">
  //     {!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Dashboard />}
  //   </div>
  // );
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const user = userpool.getCurrentUser();
    if (user) {
      <Navigate to="/dashboard" replace />;
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route
            exact
            path="/signup"
            element={<Signup userInfo={userInfo} setUserInfo={setUserInfo} />}
          ></Route>
          <Route
            exact
            path="/confirm"
            element={<Confirm userInfo={userInfo} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
