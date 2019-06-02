import React, { useState } from "react";
import Router from "./router";
import MenuLateral from "./components/layout/Menu";

import api from "./services/api";
import "./styles/index.less";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // const [collapsed, setCollapsed] = useState(false);

  const isMobile = false;

  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <MenuLateral /> */}
      <Layout>
        <Header
          style={{
            color: "white",
            background: "#5c5c8e",
            padding: 0,
            display: "flex"
          }}
        >
          <div className="logo" style={{ margin: "0 20px" }}>
            Nuvem42
          </div>
          <Menu
            theme="light"
            mode={isMobile ? "vertical" : "horizontal"}
            defaultSelectedKeys={["2"]}
            style={
              isMobile
                ? {}
                : {
                    lineHeight: "58px",
                    color: "white",
                    background: "#5c5c8e",
                    border: "none"
                  }
            }
          >
            <Menu.Item key="1">Login</Menu.Item>
            <Menu.Item key="2">Registro</Menu.Item>
            <Menu.Item key="3">Sair</Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0"
          }}
        >
          <Router />
        </Content>
        <Footer
          style={{ textAlign: "center", color: "white", background: "#5c5c8e" }}
        >
          Nuvem 42
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
