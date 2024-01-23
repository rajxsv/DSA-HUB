import axios from "axios";
import React, { useEffect, useState } from "react";
import UserPostCard from "../componenets/UserPostCard";
import { Link } from "react-router-dom";

export default function Discuss() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await axios.get(
        "http://localhost:3000/discuss/posts"
      );
      if (status == 200) {
        setPosts(data);
      } else {
        setPosts(["No Data"]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-20 m-4 overflow-scroll">
        <div>
          <Link to={'/discuss/addpost'} >
          <button className="bg-black text-white p-3 rounded-md flex float-right">
            Add Post
          </button>
          </Link>
        </div>
        <div className="grid grid-cols-2">
        {posts &&
          posts.map((item, index) => {
            return <UserPostCard key={index} data={item} />;
          })}
          </div>
      </div>
    </>
  );
}
