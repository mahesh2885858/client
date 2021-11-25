import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = res.json();
    if (res.status === 100 || !data) {
      window.alert("invalid credentials");
    } else {
      window.alert("login successfull");
      navigate("/");
    }
  };
  return (
    <section className="login">
      <div className="login-form-container">
        <div className="login-form-title">Log In</div>
        <form method="POST" className="login-form">
          <div className="login-form-item">
            <label for="email">
              <i className="zmdi zmdi-email"></i>
            </label>
            <input
              type="email"
              autocomplete="off"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="login-form-item">
            <label for="password">
              <i className="zmdi zmdi-key"></i>
            </label>
            <input
              type="password"
              autocomplete="off"
              name="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="login-submitButton"
            onClick={loginUser}
          >
            Log In
          </button>
          <NavLink to="/signup" className="login-text">
            don't have an account create one here!
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default Login;
