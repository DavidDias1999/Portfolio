import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
