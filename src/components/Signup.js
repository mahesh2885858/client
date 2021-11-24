import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    work: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, work, phone, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        work: work,
        phone: phone,
        password: password,
        cpassword: cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
    } else {
      // window.alert("registered successfully");
      console.log(data);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="form-container">
          <div className="form-title">SignUp</div>
          <form method="POST" className="form">
            <div className="form-item">
              <label htmlFor="name">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Your Email"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="work">
                <i className="zmdi zmdi-watch"></i>
              </label>
              <input
                type="text"
                autoComplete="off"
                name="work"
                id="work"
                placeholder="Your Profession"
                value={user.work}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="phone">
                <i className="zmdi zmdi-account-box-phone"></i>
              </label>
              <input
                type="number"
                autoComplete="off"
                name="phone"
                id="phone"
                placeholder="Mobile No"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">
                <i className="zmdi zmdi-key"></i>
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="form-item">
              <label htmlFor="cpassword">
                <i className="zmdi zmdi-shield-security"></i>
              </label>
              <input
                type="password"
                autoComplete="off"
                name="cpassword"
                id="cpassword"
                placeholder="confirm password"
                value={user.cpassword}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="submitButton" onClick={postData}>
              SignUp
            </button>
            <NavLink to="/login" className="login-txt">
              already have an account
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
