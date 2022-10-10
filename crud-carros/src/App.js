import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Listar from "./pages/Listar/Listar";
import React from "react";

export default function App() {
  
  return(
    <nav>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listar" element={<Listar/>} />
          <Route path="/novo" element={<h1> Oi </h1>} />
          <Route path="/sair" element={<h1> Oi </h1>} />
        </Routes>
      </BrowserRouter>
    </nav>
  )

}


