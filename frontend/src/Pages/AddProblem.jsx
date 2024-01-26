import axios from "axios";
import React from "react";
import { useState } from "react";
import { GreenAlert } from "../componenets/GreenAlert";
import { useNavigate } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("userData"));

export default function AddProblem() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProblem = {
        title: title,
        description: desc,
        tags: tags,
        links: link,
        done: false,
      };
      await axios
        .post("http://localhost:3000/user/addproblem/" + user._id,newProblem,{ withCredentials: true })
        .then(() => {
          setShowAlert(true);

          setTimeout(() => {
            setShowAlert(false);
            setTitle("")
            setDesc("")
            setLink("")
            setTags("")
            navigate('/content/list')
          }, 1 * 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch {
      console.log("Error Posting data");
    }
  };
  return (
    <form
      className="w-full flex flex-col mr-10 ml-12 mt-9"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-bold mb-5 text-4xl leading-7 font-bold">
            Add Problem
          </h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Keep the Problem description detailed and tags relevant.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    disabled={showAlert}
                    className="block flex-1 ml-2 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    required={true}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  disabled={showAlert}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required={true}
                  type="text"
                  placeholder="description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Describe the Problem
              </p>
            </div>
          </div>

          <label
            htmlFor="tag"
            className="block mt-6 text-sm font-medium leading-6 text-gray-900"
          >
            Topic
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                disabled={showAlert}
                className="block ml-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                required={true}
                type="text"
                placeholder="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
          </div>
          <label
            htmlFor="link"
            className="mt-6 block text-sm font-medium leading-6 text-gray-900"
          >
            Link to Problem
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                disabled={showAlert}
                className="block ml-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                required={true}
                type="url"
                placeholder="Links"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {showAlert ? (
        <GreenAlert message={"Problem Added"} />
      ) : (
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm "
          >
            Add Problem
          </button>
        </div>
      )}
    </form>
  );
}
