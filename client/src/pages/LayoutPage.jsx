import { Outlet } from "react-router-dom";
import "../style/LayoutPage.css";

import { createContext, useEffect, useState } from "react";

import socket from "../socket";

export const OnlineContext = createContext(null);

export default function LayoutPage() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.on("users:online", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("users:online");
    };
  }, []);

  console.log(onlineUsers, "<<<<<<<<<<<<<<<<<<<<");
  return (
    <div className="layout-page">
      <div className="main-content">
        <OnlineContext.Provider value={onlineUsers}>
          <Outlet />
        </OnlineContext.Provider>
      </div>
    </div>
  );
}
