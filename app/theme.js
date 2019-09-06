import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: orange,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
