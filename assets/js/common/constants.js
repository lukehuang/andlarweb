import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import {amber500, blueGrey500, blueGrey700} from "material-ui/styles/colors";


// Needed for onTouchTap()
injectTapEventPlugin();


// Changing MuiTheme colors
const awTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: amber500,
    pickerHeaderColor: blueGrey500
  }
});

export default awTheme;
