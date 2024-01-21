import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function User({ user, token }) {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate('/login')
  };

  return (token && user) ? (
    <div>
      <button className="ml-2" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  ) : (
    <div>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link className="ml-2" to={"/signup"}>
        <button>Signup</button>
      </Link>
    </div>
  );
}
