import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 'auto',
  width: '64%',
  marginBottom: '16px',
};

const Article = (article) => (
  <Paper style={style} zDepth={2}>
    <h1>{article.title}</h1>
    <p><i>{article.ingress}</i></p>
    <p>{article.content}</p>
  </Paper>
);

export default Article;
