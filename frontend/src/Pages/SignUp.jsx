import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });
      console.log(response);
      if (response.status == 200) {
        setMessage("User created Successfully, Login Now");
        navigate("/login");
      } else {
        setMessage("There was some issue", response.message);
        navigate("/signup");
      }
    } catch (error) {
      console.log(error, "There was some problem registering user");
    }
  };

  return (
    <div class=" w-full flex flex-col items-center justify-center border-solid p-10 rounded-md border-blue-gray-600">
      <Link
        className="font-medium text-black transition-all duration-200 hover:underline"
        to="/"
      >
        Home
      </Link>
      <h2 class="text-3xl font-bold leading-tight text-black">Sign Up</h2>
      <p class="mt-2 text-base text-gray-600">
        Already have an account?
        <Link
          className="font-medium text-black transition-all duration-200 hover:underline"
          to="/login"
        >
          {"  "}Log In
        </Link>
      </p>
      <form className="mt-8" onSubmit={handleSignup}>
        <div class="space-y-5">
          <div>
            <label for="email" class="text-base font-medium text-gray-900">
              Username
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="mt-4">
              <label for="email" class="text-base font-medium text-gray-900">
                Email address
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <label for="password" class="text-base font-medium text-gray-900">
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}
