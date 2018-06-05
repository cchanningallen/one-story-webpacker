import 'typeface-roboto'

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import { themeConfig, spacing } from './theme';
import { randomPalette } from './theme/colors';

import Button from '@material-ui/core/Button';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Tooltip from '@material-ui/core/Tooltip';

const getRandomPaletteState = () => {
  const { color, palette } = randomPalette();

  return { currentPalette: palette, currentPaletteKey: color }
};

export default class AppRoot extends Component {
  state = getRandomPaletteState();

  swapTheme = () => this.setState(getRandomPaletteState());

  render() {
    const theme = createMuiTheme({
      ...themeConfig,
      palette: {
        primary: this.state.currentPalette,
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <CssBaseline />
          <App />

          <Tooltip id="tooltip-current-palette" title={this.state.currentPaletteKey}>
            <Button
              onClick={this.swapTheme}
              style={{ position: 'fixed', bottom: spacing.sm, right: spacing.sm }}
              variant="fab"
              color="primary"
              aria-label="change colors"
            >
              <InvertColorsIcon />
            </Button>
          </Tooltip>
        </div>
      </MuiThemeProvider>
    );
  }
};
