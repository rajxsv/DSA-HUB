import React from "react";

export default function Info({ problem }) {
  const status = problem.done ? "Done" : "Not Done";
  const title = problem.title;
  const description = problem.description;
  const tags = problem.tags;
  const link = problem.links;

  console.log(problem);

  return (
    <div className="top-0 min-h-full w-full flex justify-center">
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="mb-4">
          <p>Description</p>
          <div className="bg-gray-100 p-3">
            <p className="mb-4">{description}</p>
          </div>
        </div>

        <div className="flex-wrap mb-4">
          <p>Tags</p>
          <div className="bg-gray-100 p-3">
            {Array.isArray(tags)
              ? tags.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 py-1 px-2 rounded mr-2 mb-2"
                    >
                      {item}
                    </span>
                  );
                })
              : tags}
          </div>
        </div>

        <div className="mb-4">
          <p>Links</p>
          <div className="bg-gray-100">
            <a
              href={"./#"}
              className="text-blue-500 underline hover:text-blue-700 mr-4"
            >
              {link}
            </a>
          </div>
        </div>
        <div>
          <p>Status</p>
          <div className="bg-gray-100">
            <p
              className={`text-lg ${
                status === "Done" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
