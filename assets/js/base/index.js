import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AW_THEME } from "../common/constants";
import Header from "./components/header";
import Footer from "./components/footer";


const HeaderContainer = () => (
  <MuiThemeProvider muiTheme={AW_THEME}>
    <Header />
  </MuiThemeProvider>
);

const FooterContainer = () => (
  <MuiThemeProvider muiTheme={AW_THEME}>
    <Footer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <HeaderContainer />,
  document.getElementById('header')
);

ReactDOM.render(
  <FooterContainer />,
  document.getElementById('footer')
);
