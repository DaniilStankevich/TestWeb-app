import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Headers />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
