import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import * as _colorManipulator from "material-ui/utils/colorManipulator";


const cardStyle = {
  height: 'auto',
  width: '50%',
  marginBottom: '16px',
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


class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={cardStyle}>
        <CardHeader
          title={this.props.author.first_name + this.props.author.last_name}
          subtitle={this.props.created}
          avatar="images/0.png"
        />
        <CardMedia
          overlay={<CardTitle title={this.props.title} />}
        >
          <img src="/images/1.jpg" />
        </CardMedia>
        <CardTitle subtitle={this.props.ingress} />
        <Divider />
        <CardText expandable={true} style={contentStyle}>
          {this.props.content}
        </CardText>
        <Divider />
        <CardActions>
          <Toggle
            thumbSwitchedStyle={{
              backgroundColor: this.props.muiTheme.palette.accent1Color,
            }}
            trackSwitchedStyle={{
              backgroundColor: _colorManipulator.fade(this.props.muiTheme.palette.accent1Color, 0.5),
            }}
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="Expand article"
          />
        </CardActions>
      </Card>
    );
  }
}

export default Article;
