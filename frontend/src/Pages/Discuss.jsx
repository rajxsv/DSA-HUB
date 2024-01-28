import axios from "axios";
import React, { useEffect, useState } from "react";
import UserPostCard from "../componenets/UserPostCard";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import Loader from "../componenets/Loader";

export default function Discuss() {
  const [posts, setPosts] = useState();
  const [deleted, setDeleted] = useState();
  const [likesAndDislikes, setLikesAndDislikes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await axios.get(
        "http://localhost:3000/discuss/posts",
        { withCredentials: true }
      );
      if (status == 200) {
        setPosts(data);
      } else {
        setPosts(["No Data"]);
      }
    };
    fetchData();
  }, [deleted, likesAndDislikes]);

  const handleDelete = async (_id) => {
    try {
      await axios
        .delete("http://localhost:3000/user/deletepost/" + _id, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status == 200) {
            setDeleted(!deleted);
            alert("Done");
          } else {
            alert("not Done on a successfull request");
          }
        })
        .catch(() => alert("error"));
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };

  const handleLike = async (postId, userId) => {
    try {
      await axios.post(
        "http://localhost:3000/user/likepost?" + "&postId=" + postId,
        null,
        { withCredentials: true }
      );
      setLikesAndDislikes(!likesAndDislikes);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  const handleDislike = async (postId, userId) => {
    try {
      await axios.post(
        "http://localhost:3000/user/dislikepost?" + "&postId=" + postId,
        null,
        { withCredentials: true }
      );
      setLikesAndDislikes(!likesAndDislikes);
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return posts ? (
    <>
      <div className="w-full mt-6 flex items-center flex-col gap-5">
        <div className="flex justify-between w-4/5">
          <div className="m-3 text-bold text-4xl leading-7 font-bold">
            Discuss
          </div>
          <Link to={"/discuss/addpost"}>
            <button className="bg-black text-white p-3 rounded-md flex float-right">
              Add Post
            </button>
          </Link>
        </div>
        <div className="w-4/5 grid grid-cols-3">
          {posts.map((item, index) => {
            return (
              <UserPostCard
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleDelete={handleDelete}
                key={index}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}
