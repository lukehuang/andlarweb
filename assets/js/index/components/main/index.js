import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 1024,
  width: '64%',
  textAlign: 'center',
  display: 'inline-block',
};

const Main = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 0',

  }}>
    <Paper style={style} zDepth={2} />
  </div>
);

export default Main;
