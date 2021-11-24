import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="login-form-container">
        <div className="login-form-title">Log In</div>
        <form action="" className="login-form">
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
            />
          </div>
          <button type="submit" className="login-submitButton">
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
