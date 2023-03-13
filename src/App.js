import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Freelance } from "./components/Freelance";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelance" element={<Freelance />} />
      </Routes>
    </BrowserRouter>
  );
};
