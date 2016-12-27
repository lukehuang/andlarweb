import React, {Component} from "react";

const style = {
  height: 1024,
  width: '64%',
  textAlign: 'center',
  display: 'inline-block',
};

const apiArticlesToArticles = article => ({
  articleUrl: article.absolute_url,
  title: article.title,
  ingress: article.ingress,
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
    fetch(apiUrl, {credentials: 'same-origin'})
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
