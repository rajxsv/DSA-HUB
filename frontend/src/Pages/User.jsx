import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

export default function User() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  return user ? (
    <>
      <p>{user._id}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </>
  ) : (
    "Login Bro"
  );
}
