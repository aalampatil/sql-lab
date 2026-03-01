import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        {<Outlet />}
      </div>
    </>
  );
}

export default App;
