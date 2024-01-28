import axios from "axios";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [problems, setProblems] = useState();
  const [totalProblems, setTotalProblems] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  
  useEffect(() => {
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
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="flex flex-col items-center mb-10">
        {problems &&
          problems.map((item) => {
            return (
              <div>
                <p>{item.title}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-evenly">
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          {" "}
          Prev Page{" "}
        </button>
        <button
          disabled={page >= (totalProblems / pageSize)}
          onClick={() => setPage(page + 1)}
        >
          Next Page
        </button>
        <p>{totalProblems}</p>
      </div>
    </>
  );
};

export default Test;
