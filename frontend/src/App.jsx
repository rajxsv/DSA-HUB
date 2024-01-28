import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidePanel from "./Pages/SidePanel";

export default function App() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, []);
  
  return (
    <div className="flex flex-col">
      <SidePanel />
      <Outlet />
    </div>
  );
}
