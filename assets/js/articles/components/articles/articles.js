import React, {Component} from "react";
import Article from "./article";



const Articles = props => (
  <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '32px 0 16px',
    }}>
    {
      props.articles.map((article, index) =>
        <Article {...article} key={index} />
      )
    }
  </div>
);

export default Articles;
