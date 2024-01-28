import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function User({ user, token }) {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      const { data, status } = await axios.delete(
        "http://localhost:3000/user/logout",
        { withCredentials: true }
      );
      if (status == "200") {
        alert("Done");
        navigate("/login");
      } else {
        alert("There was some problem");
        console.log(data);
      }
    } catch (error) {}
  };

  return token && user ? (
    <div>
      <button
        className="ml-2 text-sm bg-white text-black p-2 rounded-md"
        onClick={handleLogout}
      >
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
