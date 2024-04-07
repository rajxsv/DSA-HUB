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
  const loggedInUser = useUser().user;

  return (
    <div className="bg-gray-100 flex flex-col gap-3 p-5 rounded-lg w-2/5">
      <div>
        <div>{"</>"}</div>
        <div className="font font-bold h-20 text-2xl">{title}</div>
      </div>
      <div className="max-h-10 h-5 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
        {body}
      </div>
      <div className="flex gap-8 justify-between">
        <button>
          <div className="p-2 rounded-lg text-white bg-black hover:bg-gray-900">
            Read More {"->"}
          </div>
        </button>
        <div className="flex justify-end gap-8">
          <div className="flex items-center justify-center gap-2">
            <button>
              <div className="p-2 bg-green-100 rounded-lg">Like</div>
            </button>
            <div>2</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button>
              <div className="p-2 bg-red-100 rounded-lg">Dislike</div>
            </button>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
