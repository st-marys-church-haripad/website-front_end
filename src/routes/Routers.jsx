import { Route, Routes } from "react-router-dom";
import React from "react";
import NoRouteFound from "@/components/shared/NoRouteFound";
import Header from "@/components/shared/Header";
import { menuItems } from "./route";
import Donations from "@/pages/Donations";

function Routers() {
  const generateRoutes = (items) => {
    return items.map(({ url, title, element, subMenu }) => {
      return (
        <React.Fragment key={title}>
          <Route path={url} element={React.createElement(element)} />
          {subMenu && generateRoutes(subMenu)}
        </React.Fragment>
      );
    });
  };
  return (
    <>
      <Header />
      <Routes>
        {generateRoutes(menuItems)}
        <Route path="*" element={<NoRouteFound />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>
    </>
  );
}

export default Routers