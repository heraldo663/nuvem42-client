import React, { useState } from "react";
import Router from "./router";
import MenuLateral from "./components/layout/Menu";

import api from "./services/api";
import "./styles/index.less";
import { Layout, Menu, Icon, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const isMobile = !window.matchMedia("(min-width: 575px)").matches;

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
            display: "flex",
            position: "relative"
          }}
        >
          <div className="logo" style={{ margin: "0 20px" }}>
            Nuvem42
          </div>
          <Button
            type="primary"
            onClick={() => setCollapsed(!collapsed)}
            style={
              isMobile
                ? {
                    marginBottom: 16,
                    border: "none",
                    background: "transparent",
                    margin: "auto 0"
                  }
                : { display: "none" }
            }
          >
            <Icon type={collapsed ? "menu-unfold" : "menu-fold"} />
          </Button>
          <div
            className="RDX"
            style={{
              width: "100%",
              position: isMobile ? "absolute" : "initial",
              top: "65px",
              zIndex: "5",
              overflow: "hidden"
            }}
          >
            <Menu
              theme="light"
              mode={isMobile ? "vertical" : "horizontal"}
              defaultSelectedKeys={["2"]}
              // inlineCollapsed={collapsed}
              style={
                isMobile
                  ? {
                      lineHeight: "58px",
                      color: "white",
                      background: "#5c5c8e",
                      border: "none",
                      zIndex: "5",
                      top: "65px",
                      width: "100%",
                      height: "fit-content",
                      overflow: "hidden",
                      transition: ".3s",
                      transform: collapsed
                        ? "translate(0%,-100%)"
                        : "translate(0%,0%)",
                      pointerEvents: collapsed ? "none" : "auto"
                    }
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
          </div>
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
