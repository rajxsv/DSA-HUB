import axios from "axios";
import React, { useEffect, useState } from "react";
import UserPostCard from "../componenets/UserPostCard";
import { Link } from "react-router-dom";

export default function Discuss() {
  const [posts, setPosts] = useState();
  const [deleted, setDeleted] = useState();

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
  }, [deleted]);

  const handleDelete = async (_id) => {
    try {
      await axios
        .delete("http://localhost:3000/user/deletepost/" + _id)
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

  return (
    <>
      <div className="m-8 flex w-full flex-col gap-5 overflow-scroll">
        <div className="flex justify-between">
          <div className="m-3 text-bold text-4xl leading-7 font-bold">
            Discuss
          </div>
          <Link to={"/discuss/addpost"}>
            <button className="bg-black text-white p-3 rounded-md flex float-right">
              Add Post
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 overflow-scroll">
          {posts &&
            posts.map((item, index) => {
              return (
                <UserPostCard
                  handleDelete={handleDelete}
                  key={index}
                  data={item}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
