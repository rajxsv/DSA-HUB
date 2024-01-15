import React, { useState } from "react";
import axios from "axios";

export default function EditProblem() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);
 
  const createBody = () => {
    return {
      id,
      problemWithoutId: {
        title,
        description: desc,
        tags,
        links: link,
        done,
      },
    };
  };


  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
    // data mangao existing 
  };
  const handleSubmit = async (e) => {
    // have problem id and will recieve new data of that problem then make a post request
    // UseTransition hook 
    e.preventDefault();
    const body = createBody();
    const url = 'http://localhost:3000/put'
    await axios
      .put(url, body)
      .then(() => {
        alert("Problem Edited successfully");
      })
      .catch((err) => {
        alert("There was some problem sending request");
      });
  };

  return show ? ( 
    (
      <form className="w-full flex flex-col mr-10 ml-12 mt-9" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-bold mb-5 text-4xl leading-7 font-bold">
              Edit Problem
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
                  className="block ml-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  required={true}
                  type="url"
                  placeholder="Links"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </div>
            <label
              htmlFor="link"
              className="mt-6 block text-sm font-medium leading-6 text-gray-900"
            >
              Attempted 
            </label>  
            <div className="mt-2">
              <div className="">
                <input
                    className="h-4 w-4 form-radio border-gray-300 text-black"
                    type="checkbox"
                    placeholder="done"
                    value={done}
                    onChange={(e) => setDone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit Problem
          </button>
        </div>
      </form>
    ) ||
    <div>
      <form onSubmit={handleShow}>
        <button>Back</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input
          required={true}
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Description </label>
        <input
          required={true}
          type="text"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label> Link </label>
        <input
          required={true}
          type="url"
          placeholder="links"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <label> Tags </label>
        <input
          required={true}
          type="text"
          placeholder="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <label> Status </label>
        <input
          type="checkbox"
          placeholder="done"
          value={done}
          onChange={(e) => setDone(e.target.value)}
        />

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  ) 
  :
  (
    <form className="w-full flex flex-col mr-10 ml-12 mt-9" onSubmit={handleShow}>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-bold mb-5 text-4xl leading-7 font-bold">
          Edit Problem
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
                  type="number"
                  min={1}
                  value={id}
                  placeholder="Enter ID"
                  onChange={(e) => setId(e.target.value)}
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
        Edit Problem
      </button>
    </div>
  </form>
  );
}
