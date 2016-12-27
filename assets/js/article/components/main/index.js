import React, {Component} from "react";
import Articles from "../articles";



class Main extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 0',
      }}>
        <Articles />
      </div>
    )
  }
}


export default Main;
