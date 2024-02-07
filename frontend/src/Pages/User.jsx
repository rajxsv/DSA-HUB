import React, { useEffect, useState } from "react";
import { useUser } from "../UserContext";

export default function User() {
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
