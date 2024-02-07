import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../UserContext";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown element

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const { user, logout } = useUser();
  const navigate = useNavigate()

  const handleLogout = async () => {
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
    } catch (error) {
      alert(error)  
      console.log(error)
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-white focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="mr-2">
          {user ? user.username : "Log In or Create An Account"}
        </span>
        {user && <FaUser />}
      </button>

      {isOpen && (
        <div className="w-[8rem] absolute right-0 mt-2 bg-white border rounded shadow-lg">
          <ul className="py-1">
            {user ? (
              <Link to={"/user"}>
                <li className="px-4 py-2">Profile</li>
              </Link>
            ) : (
              <>
                <Link to={"/login"}>
                  <li className="px-4 py-2">Log In</li>
                </Link>

                <Link to={"/signup"}>
                  <li className="px-4 py-2">Sign Up</li>
                </Link>
              </>
            )}
            {user && (
              <li className="px-4 py-2">
                <button onClick={handleLogout}>Log Out</button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test;
