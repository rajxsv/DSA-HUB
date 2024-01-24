import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserPostCard({handleDelete, key, data }) {
  const { _id, user, likes, dislikes, title, body } = data;
  const loggedInUser = JSON.parse(localStorage.getItem("userData"));
  
  return (
    <div
      key={key}
      className="divide-y shadow-md divide-solid border-solid border-2 m-2 p-3 rounded-lg max-h-[70px] min-h-[12rem] flex flex-col justify-evenly"
    >
      <div className="divide-y divide-solid">
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
      <div className="max-h-20 overflow-scroll">{body}</div>
      <div className="flex gap-2">
        <p>Likes {likes.length}</p>
        <p>Dislikes {dislikes.length}</p>
      </div>
    </div>
  );
}
