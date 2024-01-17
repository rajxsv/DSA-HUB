import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

export default function SidePanel() {
  return (
    (
      <Card className="w-2/5 h-screen bg-gray-100 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography className="text-6xl" variant="h5" color="blue-gray">
            {"{ }"}
          </Typography>
        </div>
        <div className="flex flex-col justify-between h-full">
          <List className="text-1xl">
            <Link to="/">
              <ListItem>Home</ListItem>
            </Link>
            <Link id="link-style" to="/content/list">
              <ListItem>Problems</ListItem>
            </Link>
            <Link id="link-style" to="/content/addProblem">
              <ListItem>Add Problem</ListItem>
            </Link>
            <Link id="link-style" to="/content/deleteProblem">
              <ListItem>Delete Problem</ListItem>
            </Link>
            <Link id="link-style" to="/content/editProblem">
              <ListItem>Edit Problem</ListItem>
            </Link>
            <Link id="link-style" to="/content/compiler">
              <ListItem>Compiler</ListItem>
            </Link>
          </List>
          <div className=" ml-4 flex flex-col mb-5">
            <Link to={'/login'} className="mb-5">
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log In
              </button>
            </Link>
            <Link to={'/signup'}>
              <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </Card>
    ) || (
      <>
        <ul className="" id="card">
          <li>
            <Link id="link-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="link-style" to="/content/list">
              Problems
            </Link>
          </li>
          <li>
            <Link id="link-style" to="/content/addProblem">
              Add Problem
            </Link>
          </li>
          <li>
            <Link id="link-style" to="/content/deleteProblem">
              Delete Problem
            </Link>
          </li>
          <li>
            <Link id="link-style" to="/content/editProblem">
              Edit Problem
            </Link>
          </li>
        </ul>
      </>
    )
  );
}
