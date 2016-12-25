import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {amber500, blueGrey500, blueGrey700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Main from './components/main';
import Header from './components/header'


// Needed for onTouchTap()
injectTapEventPlugin();


// Changing MuiTheme colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: amber500,
    pickerHeaderColor: blueGrey500
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <Main />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
