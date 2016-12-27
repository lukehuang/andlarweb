import React from "react";
import Github from "./github";
import muiThemeable from 'material-ui/styles/muiThemeable';

const Footer = (props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: props.muiTheme.palette.primary2Color,
      padding: '32px 16px'
    }}>
    <div
      id="footer-left"
      style={{lineHeight: '32px'}}>
      © 2016 Anders Larsen
    </div>
    <div id="footer-right">
      <Github muiTheme={props.muiTheme} />
    </div>
  </div>
);

export default muiThemeable()(Footer);