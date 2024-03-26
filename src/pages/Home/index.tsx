import React from "react";
import "./index.css";
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Content/>
      <Footer/>
    </div>
  );
};
