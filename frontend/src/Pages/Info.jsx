import React from "react";

export default function Info({ problem }) {
  const status = problem.done ? "Done" : "Not Done";
  const title = problem.title;
  const description = problem.description;
  const tags = problem.tags;
  const link = problem.links;

  return (
    // <div>
    //   {problem.id}
    //   <br />
    //   {problem.description}
    //   <br />
    //   {problem.tags}
    //   <br />
    //   {problem.links}
    //   <br />
    //   {status}
    //   <br />
    // </div>
    <div className="top-0 min-h-screen w-full flex justify-center">
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>

        <div className="flex-wrap mb-4">
          <span className="bg-gray-700 text-gray-300 py-1 px-2 rounded mr-2 mb-2">
            {tags}
          </span>
        </div>

        <div className="mb-4">
          <a
            href={"./#"}
            className="text-blue-500 underline hover:text-blue-700 mr-4"
          >
            {link}
          </a>
        </div>

        <p
          className={`text-lg ${
            status === "Done" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
