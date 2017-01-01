import React, {Component} from "react";
import { API_ARTICLES } from "../../../common/constants";
import Articles from "./articles";
import moment from "moment";


const apiArticlesToArticles = article => ({
  articleUrl: article.absolute_url,
  author: article.author.first_name + ' ' + article.author.last_name,
  avatar: article.author.avatar,
  created: moment(article.created).format('DD/MM/YYYY H:mm:ss'),
  title: article.title,
  ingress: article.ingress,
  content: article.content,
  image: article.image,
});

class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };

    this.fetchArticles();
  }

  fetchArticles() {
    fetch(API_ARTICLES, {credentials: 'same-origin'})
    .then(response => response.json())
    .then((json) => {
      this.setState({
        articles: json.results.map(apiArticlesToArticles),
      });
    });
  }

  render() {
    return (
      <Articles articles={this.state.articles} />
    )
  }
}

export default ArticlesContainer;
