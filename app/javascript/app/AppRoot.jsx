import 'typeface-roboto'

import React from 'react';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider } from 'material-ui/styles';
import App from './App';
import { muiTheme } from './theme';

export default props => (
  <MuiThemeProvider theme={muiTheme}>
    <div>
      <Reboot />
      <App />
    </div>
  </MuiThemeProvider>
);
