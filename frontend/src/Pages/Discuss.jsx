import axios from "axios";
import React, { useEffect, useState } from "react";
import UserPostCard from "../componenets/UserPostCard";
import { Link } from "react-router-dom";
import Loader from "../componenets/Loader";

export default function Discuss() {
  const [posts, setPosts] = useState();
  const [deleted, setDeleted] = useState();
  const [likesAndDislikes, setLikesAndDislikes] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPosts, setTotalPosts] = useState();
  useEffect(() => {
    fetchAllPosts();
    // if(allPosts) {
    // } else {
    // fetchUserPosts();
    // }
  }, [deleted, likesAndDislikes, page, pageSize]);

  const fetchAllPosts = async () => {
    try {
      await axios
        .get(
          "http://localhost:3000/public/posts?" +
            "page=" +
            page +
            "&pagesize=" +
            pageSize
        )
        .then((response) => {
          setPosts(response.data.postsPerPage);
          setTotalPosts(response.data.totalPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserData = async () => {
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
        <div className="flex justify-center gap-[56rem]">
          <div className="m-3 text-bold text-4xl leading-7 font-bold">
            Discuss
          </div>
          <Link to={"/discuss/addpost"}>
            <button className="bg-black text-white p-3 rounded-md flex">
              Add Post
            </button>
          </Link>
        </div>
        <div className="w-4/5 gap-12 flex justify-center flex-wrap">
          {posts.map((item, index) => {
            return (
              <UserPostCard
                handleLike={handleLike}
                handleDislike={handleDislike}
                handleDelete={handleDelete}
                data={item}
                key={index}
              />
            );
          })}
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between">
            <div className="px-5 py-2">Page {page}</div>
            <div className="flex gap-10 justify-end">
              <button
                className="bg-black text-white px-5 py-2 rounded-md"
                disabled={page == 1}
                onClick={() => setPage(page - 1)}
              >
                {"<-"} Prev
              </button>
              <button
                disabled={page >= totalPosts / pageSize}
                onClick={() => setPage(page + 1)}
                className="bg-black text-white px-5 py-2 rounded-md"
              >
                Next {"->"}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <p>
            {" "}
            Showing {posts.length} of {totalPosts} posts{" "}
          </p>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}
