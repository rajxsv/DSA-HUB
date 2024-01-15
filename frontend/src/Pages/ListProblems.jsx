import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { List, ListItem, Card } from "@material-tailwind/react";

export default function ListProblems() {
  const [problems, setProblems] = useState([{ title: "loading" }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setProblems(response.data.problems);
      } catch {
        console.log("Error fwtching data");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Card className="mt-8 w-full max-h-svh overflow-hidde">
        <h1 className="ml-10 mb-5 text-4xl font-bold text-black">
          Problem List
        </h1>
          <div className="flex w-full justify-between">
              <h2 className=" ml-10 text-2xl w-1/5  text-bold text-black" > Problem No. </h2>
              <div className="flex justify-between w-4/5">
                <h2 className="text-2xl text-bold text-black">Problem Title</h2>
                <h2 className="mr-3 text-2xl text-bold text-black">Status</h2>
              </div>
          </div>  
        <List className="ml-6 overflow-scroll h-min">
          {problems.map((problem, index) => {
            return ( 
              <Link
              key={index}
              to="/content/problems/"
              state={{ id: problem.id }}
              >
                <ListItem className="flex w-full justify-between">
                  <p className=""> {problem.id} </p>
                  <div className="flex justify-between w-4/5"> 
                    <p>{problem.title}</p>
                    <p>
                      {problem.done ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                      ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                      )}{" "}
                    </p>
                  </div>
                  
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Card>
      </>
      );
    }
