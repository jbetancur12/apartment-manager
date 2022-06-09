import React from "react";
import { Route, Routes } from "react-router-dom";
import Button from "../Button/Button";
import MainCards from "../MainCards/MainCards";
import Menu from "../Menu/Menu";
import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <Menu />

      <section className="Main-cards">
        <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="about" element={<Button label="About" />} />
        </Routes>
      </section>
    </main>
  );
};

export default Main;
