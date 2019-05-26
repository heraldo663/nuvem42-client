import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Router from "./router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {

  const [theme,  setTheme ] = useState({
    main: "mediumseagreen",
    primaryColor: '#5c5c8e'
  });

  function changeColor(){
    setTheme({
      primaryColor: 'green'
    })
  }

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
