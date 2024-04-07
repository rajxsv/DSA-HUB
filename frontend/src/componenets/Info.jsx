import React from "react";

export default function Info({ problem }) {
  const status = problem.done ? "Done" : "Not Done";
  const title = problem.title;
  const description = problem.description;
  const tags = problem.tags;
  const link = problem.links;

  console.log(problem);

  return (
    <div className="flex w-3/5 flex-col mt-10 gap-10 justify-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="mb-4">
          <p className=" font-bold text-3xl">Description</p>
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="mb-4">{description}</p>
          </div>
        </div>

        <div className="flex-wrap mb-4">
          <p className=" font-bold text-2xl">Tags</p>
          <div className="bg-gray-100 p-3 rounded-md">
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
          <p className=" font-bold text-2xl">Links</p>
          <div className="bg-gray-100 rounded-md p-2">
            <a
              href={"./#"}
              className="text-blue-500 underline hover:text-blue-700 mr-4"
            >
              {link}
            </a>
          </div>
        </div>
        <div>
          <p className=" font-bold text-2xl">Status</p>
          <div className="bg-gray-100">
            <p
              className={`text-lg ${
                status === "Done" ? "text-green-400" : "text-red-400"
              } rounded-md p-2`}
            >
              {status}
            </p>
          </div>
      </div>
    </div>
  );
}
