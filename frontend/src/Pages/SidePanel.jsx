import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const storedToken = localStorage.getItem("token");
    setUser(storedUser);
    setToken(storedToken);
  }, localStorage);

  return (
    <nav className="bg-black p-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl focus:bg-gray-900 p-2 rounded-md">
          {"{ }"}
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md">
            Home
          </Link>
          <Link to="/content/list" className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md">
            Problems
          </Link>
          <Link to="/content/addProblem" className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md">
            Add Problem
          </Link>
          <Link to="/discuss" className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md">
            Discuss
          </Link>
          <Link to="/content/compiler" className="text-gray-500 focus:text-white focus:bg-gray-900 p-2 rounded-md">
            Compiler
          </Link>
        </div>
        <div className="flex items-center">
          {user && (
            <div className="text-gray-500 focus:text-white ml-4">
              <p>Greetings {user.username}!</p>
              <p>{user._id}</p>
              {/* Include User component as needed */}
            </div>
          )}
        </div>
        <User user={user} token={token} />
      </div>
    </nav>
  );
}
