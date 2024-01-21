import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import User from "./User";

export default function SidePanel() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const storedToken = localStorage.getItem("token")
    setUser(storedUser)
    setToken(storedToken)
  },localStorage)
  
  return (
    <Card className="w-2/5 h-screen bg-gray-100 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography className="text-2xl" variant="h5" color="blue-gray">
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
          <Link id="link-style" to="/content/editProblem">
            <ListItem>Edit Problem</ListItem>
          </Link>
          <Link id="link-style" to="/content/compiler">
            <ListItem>Compiler</ListItem>
          </Link>
          <ListItem>{user ? `Logged in as ${user.email}` : ""}</ListItem>
        </List>
        <User user={user} token={token} />
      </div>
    </Card>
  );
}
