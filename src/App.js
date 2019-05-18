import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Router from "./router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const theme = {
  main: "mediumseagreen"
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
