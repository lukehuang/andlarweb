import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AW_THEME} from "../common/constants";
import ArticlesContainer from "./components/articles";

require('es6-promise').polyfill();
require('isomorphic-fetch');

const Main = () => (
  <MuiThemeProvider muiTheme={AW_THEME}>
    <ArticlesContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
