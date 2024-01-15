import React, { useState } from "react";
import axios from "axios";

export default function DeleteProblem() {
  const [id, setId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/delete/" + id;
    console.log(id);
    await axios
      .delete(url)
      .then((res) => {
        alert("Deleted !");
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form className="w-full flex flex-col mr-10 ml-12 mt-9" onSubmit={handleSubmit}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-bold mb-5 text-4xl leading-7 font-bold">
          Delete Problem
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Auth in develoment.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Problem No.
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  className="block flex-1 ml-2 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={(e) => setId(e.target.value)}
                  type="number"
                  value={id}
                  placeholder="Problem No."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Delete Problem
      </button>
    </div>
  </form>
  );
}
