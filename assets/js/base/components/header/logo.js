import React from "react";
import SvgIcon from "material-ui/SvgIcon";


const logoDimensions = {
  height: '150px',
  width: '150px',
  marginBottom: '5px',
};

const Logo = (props) => (
  <div
    style={{
      backgroundColor: props.muiTheme.palette.primary1Color,
      padding: '15px',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    }}>
    <SvgIcon
      color={props.muiTheme.palette.alternateTextColor}
      viewBox="0 0 150 150"
      style={logoDimensions}>
      <circle
        style={{
          strokeWidth: 5,
          stroke: props.muiTheme.palette.alternateTextColor,
          fill: props.muiTheme.palette.accent1Color
        }}
        cx="75" cy="75" r="72.5"
      />
      <g transform="matrix(1.1111112,0,0,1.1111112,-8.7383404,-20.283343)">
        <path d="m 46.552404,107.907 c -0.2256,-0.3879 -0.2256,-0.8696 -0.001,-1.2571 l 27.3618,-47.396303 -3.3225,-5.7534 -35.0923,60.784803 81.180696,0 3.3209,-5.7528 -72.361796,10e-4 c -0.4487,0 -0.8654,-0.2413 -1.0858,-0.6262 z"/>
        <path d="m 108.9487,99.637897 c -0.2225,0.387903 -0.6392,0.628803 -1.0874,0.628803 l -54.725596,5e-4 -3.3225,5.7549 70.186296,-10e-4 -40.589996,-70.305803 -6.6419,0 36.180096,62.667 c 0.2245,0.3881 0.2245,0.8703 0.001,1.2561 z"/>
        <path d="m 69.503104,50.362497 c 0.2136,-0.3723 0.6304,-0.6031 1.0875,-0.6031 0.4576,0 0.8743,0.2309 1.0869,0.6021 l 27.3665,47.3937 6.642396,0 -35.094196,-60.7843 -40.5922,70.305803 3.3231,5.7529 36.18,-62.667103 z"/>
      </g>
    </SvgIcon>
    <p>nanos gigantum humeris insidentes</p>
  </div>
);

export default Logo;
