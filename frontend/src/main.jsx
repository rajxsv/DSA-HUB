import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./UserContext";

import App from "./App.jsx";
import Landing from "./Pages/Landing";
import List from "./Pages/ListProblems";
import Problems from "./Pages/Problem";
import AddProblem from "./Pages/AddProblem";
import DeleteProblem from "./Pages/DeleteProblem";
import EditProblem from "./Pages/EditProblem";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
// import Test from "./Pages/Test";
import Discuss from "./Pages/Discuss";
import AddPost from "./Pages/AddPost";
import User from "./Pages/User";
import Test2 from "./Pages/Test2";

// je children paaye aa OUTLET deke aao
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/content/list",
        element: <List />,
      },
      {
        path: "/content/problems/",
        element: <Problems />,
      },
      {
        path: "/content/addProblem",
        element: <AddProblem />,
      },
      {
        path: "/content/deleteProblem",
        element: <DeleteProblem />,
      },
      {
        path: "/content/editProblem",
        element: <EditProblem />,
      },
      {
        path: "/discuss",
        element: <Discuss />,
      },
      {
        path: "/discuss/addpost",
        element: <AddPost />,
      },{
        path: "/user",
        element: <User />
      }
    ],
  },
  {
    path: '/test2',
    element: <Test2 />

  }
  // {
    // path: "/test",
    // element: <Test />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
