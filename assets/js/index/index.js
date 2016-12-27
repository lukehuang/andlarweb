import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AW_THEME } from "../common/constants";
import Main from "./components/main";


const MainContainer = () => (
  <MuiThemeProvider muiTheme={AW_THEME}>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MainContainer />,
  document.getElementById('main')
);
