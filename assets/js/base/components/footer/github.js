import React from "react";
import SvgIcon from "material-ui/SvgIcon";
import muiThemeable from 'material-ui/styles/muiThemeable';

const iconDimensions = {
  height: '32px',
  width: '32px',
  verticalAlign: 'middle',
};

const Github = (props) => (
  <a href="https://github.com/sardred/">
    <SvgIcon color={props.muiTheme.palette.alternateTextColor} hoverColor={props.muiTheme.palette.accent1Color} viewBox='0 0 32 32' style={ iconDimensions }>
      <path d="m 0,16.406225 c 0,7.246998 4.584,13.395872 10.943,15.56546 0.8,0.150722 1.092,-0.355788 1.092,-0.790526 0,-0.389623 -0.014,-1.4211 -0.022,-2.789909 -4.451,0.991489 -5.39,-2.199323 -5.39,-2.199323 -0.727,-1.8948 -1.776,-2.39926 -1.776,-2.39926 -1.453,-1.018148 0.11,-0.997641 0.11,-0.997641 1.605,0.115861 2.45,1.690761 2.45,1.690761 1.428,2.506919 3.745,1.78304 4.657,1.362657 0.145,-1.060186 0.559,-1.783041 1.016,-2.193171 -3.553,-0.414231 -7.288,-1.820977 -7.288,-8.107245 0,-1.791242 0.623,-3.255407 1.647,-4.402745 -0.165,-0.415257 -0.714,-2.0824351 0.156,-4.3412262 0,0 1.344,-0.4408897 4.4,1.6815331 1.277,-0.3639904 2.645,-0.5454729 4.006,-0.5526502 1.359,0.00718 2.728,0.1886598 4.006,0.5526502 3.054,-2.1224228 4.395,-1.6815331 4.395,-1.6815331 0.873,2.2587911 0.324,3.9259692 0.159,4.3412262 1.026,1.147338 1.645,2.611503 1.645,4.402745 0,6.301648 -3.741,7.688913 -7.305,8.094941 0.574,0.506511 1.086,1.507228 1.086,3.038039 0,2.19317 -0.02,3.961855 -0.02,4.500151 0,0.438839 0.288,0.949451 1.1,0.788475 C 27.42,29.795945 32,23.651172 32,16.406225 32,7.3444031 24.836,0 15.999,0 7.164,0 0,7.3444031 0,16.406225 Z"></path>
    </SvgIcon>
  </a>
);

export default muiThemeable()(Github);