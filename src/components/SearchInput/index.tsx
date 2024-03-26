import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "./index.css";

const searchPrefix = <AudioOutlined style={{ color: "#1677ff" }} />;

const onSearch = (value: string) => {
  console.log(value);
};

export const SearchInput = () => (
  <div className="search-input-container">
    <Input.Search
      placeholder="Search for movies"
      prefix={searchPrefix}
      onSearch={onSearch}
    />
  </div>
);
