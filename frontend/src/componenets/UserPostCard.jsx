import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useUser } from "../UserContext";

export default function UserPostCard({
  handleLike,
  handleDislike,
  handleDelete,
  key,
  data,
}) {
  const { _id, user, likes, dislikes, title, body } = data;
  const loggedInUser = useUser().user

  return (
    (
      <Card key={key} className="mt-6 overflow-hidden w-96 border-solid border-2">
        <CardBody>
          <div className="flex justify-between" >
              <p className="f text-3xl font-extrabold font p-2 bg-gray-100 rounded-md">{'</>'}</p>
            {/* {console.log(loggedInUser._id ,user)} */}
            {loggedInUser && loggedInUser._id == user && (
              <button
                onClick={() => handleDelete(_id)}
                className="w-min text-sm rounded-lg text-red-300 p-2"
              >
                Delete
              </button>
            )}
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{body}</Typography>
        </CardBody>
        <CardFooter className=" bg-gray-100 rounded-lg m-3 items-center ">
          <div className="flex justify-between ">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center hover:text-black gap-2 bg-gray-800 text-white"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
            <button
              className="bg-green-100 text-green-900 text-[0.8rem] p-1 rounded-md px-2"
              onClick={() => handleLike(_id, user._id)}
            >
              Like
            </button>{" "}
            <p className="flex flex-col justify-center">{likes.length}</p>
            <button
              className="bg-red-100 text-red-900 p-1 px-2 rounded-md text-[0.8rem]"
              onClick={() => handleDislike(_id, user._id)}
            >
              Dislike
            </button>{" "}
            <p className="flex flex-col justify-center">{dislikes.length}</p>
          </div>
        </CardFooter>
      </Card>
    ) || (
      <div
        key={key}
        className="shadow-md border-solid border-2 m-2 p-3 rounded-lg max-h-[70px] min-h-[12rem] flex flex-col justify-evenly"
      >
        <div>
          <div className="font-extrabold text-2xl flex justify-between">
            <div>{title}</div>
            <div>
              {loggedInUser._id == user._id && (
                <button
                  onClick={() => handleDelete(_id)}
                  className="w-min text-sm rounded-lg text-red-300 p-2"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <div>{user.username}</div>
          <div></div>
        </div>
        <div className="max-h-20 overflow-hidden">{body}</div>
        <div className="flex gap-2">
          <button
            className="bg-green-100 text-green-900 text-[0.8rem] p-1 rounded-md px-2"
            onClick={() => handleLike(_id, user._id)}
          >
            Like
          </button>{" "}
          <p className="flex flex-col justify-center">{likes.length}</p>
          <button
            className="bg-red-100 text-red-900 p-1 px-2 rounded-md text-[0.8rem]"
            onClick={() => handleDislike(_id, user._id)}
          >
            Dislike
          </button>{" "}
          <p className="flex flex-col justify-center">{dislikes.length}</p>
        </div>
      </div>
    )
  );
}
