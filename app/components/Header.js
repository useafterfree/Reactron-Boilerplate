import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  render() {
    const {
      captureON, classes
    } = this.props;
    // add .recording class when we are recording
    const classNameList = classNames({
      AppBar: true,
      recording: captureON
    });

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classNameList}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Camera 1: Office
            </Typography>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <span style={{
                color: 'white', fontSize: 25, marginLeft: 30, visibility: captureON ? 'visible' : 'hidden'
              }}
              >
                CAPTURING
              </span>
            </Typography>
            <Typography style={{ color: '#FFF', fontSize: '18px' }}>
              {this.state.time}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  captureON: PropTypes.bool.isRequired
};

export default withStyles(styles)(Header);
