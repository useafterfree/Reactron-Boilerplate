import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppContainer from '../containers/AppContainer';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        color: 'white'
      },
      subheading: {
        color: 'white'
      }
    }
  },
  palette: {
    primary: {
      main: '#03adad'
    }
  }
});

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
