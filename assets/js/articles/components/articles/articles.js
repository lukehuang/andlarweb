import React, {Component} from "react";
import Article from "./article";

const Articles = props => (
  <div>
    {
      props.articles.map(article =>
        <Article article={article} />
      )
    }
  </div>
);

export default Articles;
