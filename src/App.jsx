import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  );
}

export default App;
