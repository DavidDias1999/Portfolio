import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";
import Graduations from "./pages/Graduations/Graduations";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="graduations" element={<Graduations/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
