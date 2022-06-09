import React from "react";
import MainCards from "../MainCards/MainCards";
import Menu from "../Menu/Menu";
import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <Menu />

      <section className="Main-cards">
        <MainCards />
      </section>
    </main>
  );
};

export default Main;
