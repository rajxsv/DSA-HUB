import React from "react";
import { IconButton } from "@material-tailwind/react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function UserPostCard({
  handleLike,
  handleDislike,
  handleDelete,
  key,
  data,
}) {
  const { _id, user, likes, dislikes, title, body } = data;
  const loggedInUser = JSON.parse(localStorage.getItem("userData"));

  /*
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function CardWithLink() {
  return (
    <Card key={key} className="mt-6 w-96">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {body}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
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
      </CardFooter>
    </Card>
  );
}
*/

  return (
    (
      <Card key={key} className="mt-6 overflow-hidden w-96">
        <CardBody>
          <div className="flex justify-between" >
              <p className="f text-3xl font-extrabold font p-2 bg-gray-100 rounded-md">{'</>'}</p>
            {loggedInUser._id == user._id && (
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
