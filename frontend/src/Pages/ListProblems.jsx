import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("userData"));

export default function NewListProblems() {
  const [problems, setProblems] = useState([{ title: "loading" }]);
  const [deleted, setDelete] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3000/user/getproblems/" + user._id;
        const { data } = await axios.get(url);
        console.log(data);
        setProblems(data);
      } catch {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, [deleted]);

  const handleDeleteProblem = async (_id) => {
    try {
      const url = "http://localhost:3000/user/deleteproblem/" + _id;
      await axios
        .delete(url)
        .then((res) => {
          // alert(res.message);
          setDelete(!deleted)
        })
        .catch(() => {
          throw new Error();
        });
    } catch (error) {
      console.log(error);
      alert("There was some issue");
    }
  };

  return problems ? (
    <section className=" ml-9 mt-6 mx-auto w-full max-w-7xl px-4 py-4 overflow-scroll">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-bold mb-5 text-4xl leading-7 font-bold">
            Problems
          </h2>
          <p className="mt-1 text-sm text-gray-700">
            This is a list of all Problems. You can add new Problems, edit or
            delete existing ones.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                    >
                      Tag
                    </th>
                  </tr>
                </thead>
                {problems.map((item, index) => {
                  return (
                    <tbody
                      key={index}
                      className="divide-y divide-gray-200 bg-white"
                    >
                      <tr className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">
                            <Link
                              key={index}
                              to="/content/problems/"
                              state={{ id: item.id }}
                            >
                              {item.title}
                            </Link>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {item.done ? (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Done
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                              Not Done
                            </span>
                          )}
                        </td>
                        <td className="flex justify-between whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {item.tags}
                          <button
                            className="fonr-red text-deep-orange-700"
                            onClick={() => handleDeleteProblem(item._id)}
                          >
                            {" "}
                            Delete{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full border-gray-300">
        <div className="mt-2 flex items-center justify-end">
          <div className="space-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              ← Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h1>Loading</h1>
  );
}
