import React from "react";
import "./index.css";
import { CarouselComponent } from "../CarouselComponent";
import { Button, Carousel } from "antd";

import { RecommendedMovies } from "../RecommendedMovies";

const contentStyle: any = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const CarouselWithArrows = () => (
  <div className="carousel-wrapper">
    <Carousel autoplay>
      <img src="/images/offer2.jpg" />
      <img src="/images/offer3.jpg" />
      <img src="/images/offer12.jpg" />
      <img src="/images/offer16.jpg" />
      <img src="/images/offer17.jpg" />
    </Carousel>
  </div>
);

export const Content = () => {
  return (
    <div className="content-container">
      <CarouselComponent children={<CarouselWithArrows />} />
      <RecommendedMovies />
    </div>
  );
};
