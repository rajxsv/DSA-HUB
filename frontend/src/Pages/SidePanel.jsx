import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

export default function SidePanel() {
  return (
    (
      <Card className="w-2/5 h-screen bg-gray-100 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography className="text-6xl" variant="h5" color="blue-gray">
            {'{ }'}
          </Typography>
        </div>
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
