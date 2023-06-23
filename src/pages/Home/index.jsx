import React from "react";
import AboutMe from "../../components/AboutMe";
import { Outlet } from "react-router-dom";


export default function Inicio() {
  return (
    <main>
      <AboutMe/>
      <Outlet/>
    </main>

  );
}
