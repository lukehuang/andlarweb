import React from 'react';
import Logo from './logo';
import muiThemeable from 'material-ui/styles/muiThemeable';


const Header = (props) => (
  <div>
    <Logo muiTheme={props.muiTheme} />
  </div>
);

export default muiThemeable()(Header);
