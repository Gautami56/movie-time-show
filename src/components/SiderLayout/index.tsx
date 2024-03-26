import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleContainerStyle: any = {
    border: "1px solid yellow",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    right: 10,
    zIndex: 1,
    height: "20px",
    width: "20px",
  };
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
        right: 0,
        top: 12,
        border: "1px solid red",
      }}
    >
      <div style={toggleContainerStyle} onClick={toggleCollapsed}>
        <MenuFoldOutlined />
      </div>

      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        collapsedWidth="0"
        width="200"
        style={{
          overflow: "auto",
          height: "80vh",
          right: 0,
          position: "absolute",

          background: collapsed ? "transparent" : "#00B2AA",
        }}
      >
        {!collapsed && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ opacity: collapsed ? 0 : 1 }}
          />
        )}
      </Sider>
    </div>
  );
};
