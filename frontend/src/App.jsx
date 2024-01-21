import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidePanel from "./Pages/SidePanel";

export default function App() {
  const user = JSON.parse(localStorage.getItem("userData"))
  const navigate = useNavigate();
  if(user) return (
    <div className="flex h-screen">
      <SidePanel />
      <Outlet />
    </div>
  )
  navigate('/login')
}
