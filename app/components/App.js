import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ListSubheader from '@material-ui/core/ListSubheader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';

import socketIOClient from 'socket.io-client';

/* Layout */
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/styles';

// Required for clicks
injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);

    this.classes = (theme) => ({
      root: {
        flexGrow: 1,
        height: '100%'
      },
      paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
      }
    });

    this.socket = null;
    this.state = {
      endpoint: 'http://127.0.0.1:3000',
      // initialState: this.loadInitialState()
    };
  }

  componentDidMount() {
    this.socket = socketIOClient(this.state.endpoint);
    this.socket.on('connect', () => {});
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        {this.getTemplate()}
      </div>
    );
  }

  getTemplate() {
    const {
      // records
    } = this.props;

    const classes = {};

    const {
      initialState,
    } = this.state;

    return (
      <div id="approot" style={styles.app}></div>
    );
  }
}

App.propTypes = { };

// export default App;
export default withStyles(styles)(App);
