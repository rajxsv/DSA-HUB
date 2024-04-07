import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GreenAlert } from "../componenets/GreenAlert";
import Loader from "../componenets/Loader";
import { useUser } from "../UserContext";

const params = new URLSearchParams(document.location.search);

export default function NewListProblems() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState();
  const [problems, setProblems] = useState();
  const [totalProblems, setTotalProblems] = useState();
  const [page, setPage] = useState(params.get("page") || 1);
  const [pageSize, setPageSize] = useState(10);
  const { user } = useUser();
  const [search, setSearch] = useState(params.get("query"));
  const navigate = useNavigate();
  const url = useParams();

  const fetchData = async () => {
    await axios
      .get(
        "http://localhost:3000/public/problems?page=" +
          String(page) +
          "&pagesize=" +
          String(pageSize),
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setProblems(response.data.problemsPerPage);
        setTotalProblems(response.data.totalProblems);
        console.log(problems);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteProblem = async (_id) => {
    try {
      const url = "http://localhost:3000/user/deleteproblem/" + _id;
      await axios
        .delete(url)
        .then((res) => {
          setShowAlert(true);
          setMessage("Problem Deleted");

          setTimeout(() => {
            setShowAlert(false);
          }, 3 * 1000);
        })
        .catch(() => {
          throw new Error();
        });
    } catch (error) {
      console.log(error);
      alert("There was some issue");
    }
  };

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/public/search?page=${page}&query=${search}`
      );
      setProblems(data.problemsPerPage);
      setTotalProblems(data.totalProblems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const load = async () => {
      if (search) {
        await handleSearch();
      } else {
        await fetchData();
      }
    };
    load();
  }, [page]);

  return problems ? (
    <section className="w-4/5 mt-6 mx-auto px-4 py-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <div className="flex w-full justify-between">
              <h2 className="text-bold mb-5 text-4xl leading-7 font-bold">
                Problems
              </h2>
              <div className="flex gap-7 items-center justify-end">
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="rounded-md"
                  ></input>
                  <Link to={`/content/list?page=1&query=${search}`}>
                    <button
                      className="bg-black text-white p-3 rounded-md"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </Link>
                </div>
                <Link to="/content/addProblem">
                  <button className="bg-black text-white p-3 rounded-md">
                    Add Problem
                  </button>
                </Link>
              </div>
            </div>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Problems.
            </p>
          </div>
          <div>{showAlert && <GreenAlert message={message} />}</div>
        </div>
      </div>
      <div className="space-y-4 w-full">
        {problems.map((item, index) => (
          <div
            key={index}
            className={`bg-white flex rounded-lg p-2 ${
              index % 2 == 0 ? "bg-gray-300" : ""
            } flex gap-5 justify-between`}
          >
            <Link
              to={`/content/problems?problemid=${item._id}`}
              state={{ id: item.id }}
            >
              <div className="text-lg font-semibold mb-2 w-7/12">
                {item.title}
              </div>
            </Link>
            <div className="flex justify-between items-center mb-2 w-3/12">
              <span
                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  item.done
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {item.done ? "Done" : "Not Done"}
              </span>
              <span className="text-sm text-gray-500">{item.tags[0]}</span>
            </div>
            <p className="text-sm text-gray-500">ID: {item._id}</p>
            <div>
              <Link to={"/content/editProblem"} state={item}>
                <button className="bg-blue-100 text-blue-900 px-2 py-1 rounded-md">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="px-5 py-2">Page {page}</div>
        <div className="flex gap-10 justify-end">
          <Link to={`/content/list?page=${page - 1}`}>
            <button
              className="bg-black text-white px-5 py-2 rounded-md"
              disabled={page == 1}
              onClick={() => setPage(page - 1)}
            >
              {"<-"} Prev
            </button>
          </Link>
          <Link
            to={
              search
                ? `/content/list?page=${page + 1}&query=${search}`
                : `/content/list?page=${page + 1}`
            }
          >
            <button
              disabled={page >= totalProblems / pageSize}
              onClick={() => setPage(page + 1)}
              className="bg-black text-white px-5 py-2 rounded-md"
            >
              Next {"->"}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <p>
          {" "}
          Showing {problems.length} of {totalProblems} problems{" "}
        </p>
      </div>
    </section>
  ) : (
    <Loader />
  );
}
