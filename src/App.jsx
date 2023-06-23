import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      
      <Routes>

        <Route index element={<Inicio/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
