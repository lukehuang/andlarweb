import React from "react";
import ArticlesContainer from "../articles";

require('es6-promise').polyfill();

const Main = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 0',
  }}>
    <ArticlesContainer />
  </div>
);

export default Main;
