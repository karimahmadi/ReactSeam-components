import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import GlobalStyle from './globalStyle';
import defaultTheme from './theme';

const ThemeProvider = ({ theme, children }) => {
  let newTheme = createMuiTheme({ ...defaultTheme, ...theme });
  newTheme = responsiveFontSizes(newTheme);
  document.dir = newTheme.direction;
  document.bgColor = newTheme.palette.background.bgColor;
  return (
    <MuiThemeProvider theme={newTheme}>
      {children}
      <GlobalStyle />
    </MuiThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ThemeProvider;
