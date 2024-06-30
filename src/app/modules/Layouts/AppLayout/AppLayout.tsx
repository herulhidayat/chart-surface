import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

type Props = {
  menu?: any
}

export default function AppLayout({ menu }: Props) {

  return (
    <>
      <Header menuItems={menu} />
      <div>
        <Outlet />
      </div>
    </>
  );
}
