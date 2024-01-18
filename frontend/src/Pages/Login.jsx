import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  // implement loader, button clicked loader , use hooks (useTransition)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status == 200) {
        const token = response.data.token;

        localStorage.setItem("token", token);
        alert("User Logged in")
        setMessage("User Logged in");
        navigate("/" , { state : email });
      } else {
        console.log("There was some problem logging in");
      }
    } catch (error) {
      console.error(error);
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
      <h2 class="text-3xl font-bold leading-tight text-black">Log In</h2>
      <p class="mt-2 text-base text-gray-600">
        Don't have an account?
        <Link
          className="font-medium text-black transition-all duration-200 hover:underline"
          to="/signup"
        >
          {"  "}Sign Up
        </Link>
      </p>
      <form class="mt-8" onSubmit={handleLogin}>
        <div class="space-y-5">
          <div>
            <label for="email" class="text-base font-medium text-gray-900">
              Email
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mt-4 flex items-center justify-between">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Log In
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
