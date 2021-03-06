import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Nav = (props) => (
  <Tabs
    tabItemContainerStyle={{
      backgroundColor: props.muiTheme.palette.primary2Color
    }}
    inkBarStyle={{
      height: '4px',
      marginTop: '-4px'
    }}>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          yo mama can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default Nav;
