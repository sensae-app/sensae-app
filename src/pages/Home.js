import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ScreenHome from '../components/ScreenHome';
import logo from '../images/logo.png';

// Screen Appbar Imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Import custom home css file
import './Home.scss';

class Home extends React.Component {
  
  render() {
    const { classes } = this.props; // Modified from component lib
    return (
      <ScreenHome>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                News
              </Typography>
              <h1> hello world</h1>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        {/* END HEADER */}
        <Typography noWrap variant={'h1'}>
          Welcome
        </Typography>
        <img src={logo} alt="Sensae Logo" />
        <Button variant="text" component={Link} to="/quiz">
          Continue
        </Button>
      </ScreenHome>
    );
  }
}

const styles = {
  // container: {
  //   flexDirection: 'column',
  // },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(Home);
