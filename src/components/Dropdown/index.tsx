import React from "react";
import { Dropdown, Menu, Space, Typography } from "antd"; // Import Menu from antd
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  { key: "1", label: "Item 1" },
  { key: "2", label: "Item 2" },
  { key: "3", label: "Item 3" },
];

export const DropdownMenu = () => (
    <div className="dropdown-menu" >
  <Dropdown
    overlay={
      <Menu items={items} selectable defaultSelectedKeys={["3"]} />
    }
  >
    <Typography.Link>
      <Space>
        Genres <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
  </div>
);