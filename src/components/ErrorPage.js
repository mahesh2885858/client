import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error">
      This Page Has Not Found
      <NavLink to="/">Go to Home page</NavLink>
    </div>
  );
};

export default ErrorPage;
