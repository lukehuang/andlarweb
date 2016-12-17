import React from 'react';
import Penrose from '../penrose';

const centering = {
  width: '150px',
  height: '150px',
  paddingLeft: 'calc(50% - 75px)'
}

const Wip = () => (
  <div style={centering}>
      <Penrose />
      <p>Work in progress.</p>
  </div>
);

export default Wip;
