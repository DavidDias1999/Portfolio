import React from "react";
import AboutMe from "../../components/AboutMe";
import { Outlet } from "react-router-dom";
import ProjectsPreview from "../../components/ProjectsPreview";
import GraduationPreview from "../../components/GraduationPreview";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <ProjectsPreview />
      <GraduationPreview />
      <Outlet />
    </main>
  );
}
