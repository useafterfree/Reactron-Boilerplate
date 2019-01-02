import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

/* Layout */
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';

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
      endpoint: 'http://127.0.0.1:3000'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
    this.socket.on('connect', () => {});
  }

  componentWillUnmount() {

  }

  getTemplate() {
    return (
      <div id="approot" style={styles.app} />
    );
  }

  render() {
    return (
      <div>
        {this.getTemplate()}
      </div>
    );
  }
}

App.propTypes = { };

// export default App;
export default withStyles(styles)(App);
