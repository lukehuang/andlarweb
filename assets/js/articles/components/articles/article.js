import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 'auto',
  width: '64%',
  marginBottom: '16px',
};

const Article = ({ articleUrl, title, ingress, content }) => (
  <Paper style={style} zDepth={2}>
    <h1>{title}</h1>
    <p>{ingress}</p>
    <p>{content}</p>
  </Paper>
);

export default Article;
