import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import awTheme from "../common/constants";
import Header from "./components/header";
import Footer from "./components/footer";


const HeaderContainer = () => (
  <MuiThemeProvider muiTheme={awTheme}>
    <Header />
  </MuiThemeProvider>
);

const FooterContainer = () => (
  <MuiThemeProvider muiTheme={awTheme}>
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
