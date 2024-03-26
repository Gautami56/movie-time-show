import React from "react";
import { SearchInput } from "../SearchInput";
import { DropdownMenu } from "../Dropdown";
import { SiderLayout } from "../SiderLayout";
import "./index.css";

export const Header = () => {
  return (
    <div className="head-container">
      <div>
        <img src="/images/movie-show-icon.jpg" alt="" height={45} width={60} />
      </div>
      <div style={{ width: "50%" }}>
        <SearchInput />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "40%",
          marginRight: "20px",
        }}
      >
        <div>
          <DropdownMenu />
        </div>
        <div>
          <button
            style={{
              cursor: "pointer",
              marginLeft: "5px",
              width: "100%",
              height: "35%",
              backgroundColor: "beige",
              borderRadius: "2px",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
      {/* <div
  style={{
    display: "grid",
    gridTemplateColumns: "auto min-content", // Use min-content for the button column to fit its content
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px", // Adjust gap for spacing between elements
    width: "100%", // Ensure the container takes the full width of its parent
    paddingRight: "20px", // Add padding to the right of the container for spacing from the viewport or sider layout
  }}
>
  <div>
    <DropdownMenu />
  </div>
  <div>
    <button
      style={{
        padding: "5px 25px", // Adjust padding to ensure the button is large enough for the text
        backgroundColor: "beige",
        borderRadius: "2px",
      }}
    >
      Sign In
    </button>
  </div>
</div> */}
      {/* <div>
        <SiderLayout />
      </div> */}
    </div>
  );
};
