import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogDetail from "./Pages/BlogDetail";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog-defail/:id" element={<BlogDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
