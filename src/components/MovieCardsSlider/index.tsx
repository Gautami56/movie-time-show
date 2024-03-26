import React from "react";
import { Card } from "../Card";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const movieCardImageAndRating: any = {
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
};

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
};
const MovieSliderCard = ({ movieData }: { movieData: any }) => {
  return (
    <div style={movieCardImageAndRating}>
      <div>
        <img style={{ width: "100%" }} src={movieData.src} alt="" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "black",
            fontSize: 12,
            padding: 8,
            borderRadius: "0 0 10px 10px",
            color: "white",
          }}
        >
          <div>{movieData.imdbRating}/10</div>
          <div>{movieData.votes}</div>
        </div>
      </div>
      <div>{movieData.name}</div>
      <div>{movieData.type}</div>
    </div>
  );
};

export const MovieCardsSlider = ({ data }: { data: any }) => (
  <div className="movie-carousel">
    <Slider {...settings}>
      {data.map((movie: any, index: number) => (
        <div>
          <Card children={<MovieSliderCard movieData={movie} />} />
        </div>
      ))}
    </Slider>
  </div>
);
