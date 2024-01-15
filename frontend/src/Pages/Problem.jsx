import React from "react";
import Header from "./Header";
import Info from "./Info";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Problems() {
  const { state } = useLocation();
  const id = state.id;
  const [problem, setProblem] = useState({});

  useEffect(() => {
    const fetchProblem = async () => {
      const url = "http://localhost:3000/" + id;
      const response = await axios.get(url);

      setProblem(response.data.problems);
    };
    fetchProblem();
  }, []);

  return problem ? (
    <>
      {/* <Header problem={problem} /> */}
      <Info problem={problem} />
    </>
  ) : (
    <>
      {" "}
      <h1>loading...</h1>{" "}
    </>
  );
}
