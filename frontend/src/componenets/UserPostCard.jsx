import React from "react";

export default function UserPostCard({
  handleLike,
  handleDislike,
  handleDelete,
  key,
  data,
}) {
  const { _id, user, likes, dislikes, title, body } = data;
  const loggedInUser = JSON.parse(localStorage.getItem("userData"));
  
  return (
    <div
      key={key}
      className="shadow-md border-solid border-2 m-2 p-3 rounded-lg max-h-[70px] min-h-[12rem] flex flex-col justify-evenly"
    >
      <div >
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
  );
}
