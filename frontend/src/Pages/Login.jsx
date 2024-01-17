import React from "react";
import { Link } from "react-router-dom";

export default function Login() {

  // email, passwprd
  const handleSubmit = () => {

  }

  return (
    <section className="flex items-center justify-center w-full">
      <div class="flex items-center justify-center w-full"> 
        <div class="flex items-center justify-center">
          <div class="flex flex-col items-center w-96 justify-center border-solid border-2 p-10 rounded-md border-blue-gray-600">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Log In
            </h2>
            <p class="mt-2 text-base text-gray-600">
              Dont have an account?
              <div
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              <Link to='/Signup' >
                Sign Up
              </Link>
            </div>
            </p>
            <form onSubmit={handleSubmit} class="mt-8">
              <div class="space-y-5">
                <div>
                  <label
                    for="email"
                    class="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div class="mt-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
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
          </div>
        </div>
      </div>
    </section>
  );
}
