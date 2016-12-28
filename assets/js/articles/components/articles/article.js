import React from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
  height: 'auto',
  width: '64%',
  marginBottom: '16px',
  padding: '16px',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '200%',
  fontWeight: '500',
  marginBottom: '16px',
};

const ingressStyle = {
  fontStyle: 'italic',
  fontSize: '125%',
  fontWeight: '300',
  marginBottom: '8px',
};

const contentStyle = {
  whiteSpace: 'pre',
  lineHeight: '1.25'
};

const Article = ({ articleUrl, title, ingress, content }) => (
  <Paper style={paperStyle} zDepth={2}>
    <h1 style={titleStyle}>{title}</h1>
    <p style={ingressStyle}>{ingress}</p>
    <p style={contentStyle}>{content}</p>
  </Paper>
);

export default Article;
