import React from "react";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <div>
      MainTemplate
      <div>
        <Outlet />
      </div>
    </div>
  );
};
