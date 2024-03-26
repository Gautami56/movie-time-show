import React from "react";
import { MovieCardsSlider } from "../MovieCardsSlider";
import movieData from "./data.json";
import "./index.css";

const recommendedMoviesContainerStyle: any = {
  display: "flex",
  flexDirection: "column",
};

const headerSection: any = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",

  padding: "0 20px 0 20px",
};

export const RecommendedMovies = () => {
  return (
    <div style={recommendedMoviesContainerStyle}>
      <div style={headerSection}>
        <div style={{ fontSize: 24, fontWeight: "bolder" }}>
          Recommended Movies
        </div>
        <div
          style={{
            fontSize: 20,
            cursor: "pointer",
            color: "red",
          }}
        >
          See All
        </div>
      </div>

      <div>
        <MovieCardsSlider data={movieData} />
      </div>
    </div>
  );
};
