import React from "react";
import AboutMe from "../../components/AboutMe";
import { Outlet } from "react-router-dom";
import ProjectsPreview from "../../components/ProjectsPreview";



export default function Home() {
  return (
    <main>
      <AboutMe/>
      <ProjectsPreview/>
      <Outlet/>
    </main>

  );
}
