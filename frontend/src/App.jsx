import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SidePanel from "./Pages/SidePanel";
import { useUser } from "./UserContext";

export default function App() {
  const { user } = useUser()
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate("/signup");
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
        <SidePanel />
        <Outlet />
    </div>
  );
}
