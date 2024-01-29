import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "./User";
import { useUser } from "../UserContext";

export default function Navbar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      logout();
      const { data, status } = await axios.delete(
        "http://localhost:3000/user/logout",
        { withCredentials: true }
      );
      if (status == "200") {
        alert("Done");
        navigate("/");
      } else {
        alert("There was some problem");
        console.log(data);
      }
    } catch (error) {}
  };

  return (
    <nav className="bg-black p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-3/5">
          <div className="text-white text-2xl focus:bg-gray-900 p-2 rounded-md">
            {"</>"}
          </div>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/content/list"
              className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md"
            >
              Problems
            </Link>
            <Link
              to="/discuss"
              className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md"
            >
              Discuss
            </Link>
          </div>
        </div>
        <div className="flex justify-end"></div>
        {user ? (
          <div>
            <Link to={'/user'} >
              <button className="ml-2 text-sm bg-white text-black p-2 rounded-md">
                User
              </button>
            </Link>
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
              <button className="ml-2 text-sm bg-white text-black p-2 rounded-md">
                Login
              </button>
            </Link>
            <Link className="ml-2" to={"/signup"}>
              <button className="ml-2 text-sm bg-white text-black p-2 rounded-md">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
