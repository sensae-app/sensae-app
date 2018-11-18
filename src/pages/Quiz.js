import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ScreenHome from '../components/ScreenHome';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/es/AppBar/AppBar';
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import logo from '../images/logo.png';
import withStyles from '@material-ui/core/es/styles/withStyles';

class Quiz extends React.Component {
  render() {
    const { classes } = this.props; // Modified from component lib
    return (
      <ScreenHome>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
            </Link>
            <img src={logo} className="img-header" />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Sensae
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div className="vt-body">
          <div className="vt-card-header">
            <h2>Acuity</h2>
            <p>
              Improve your ability to associate exact hues to specific symbols.
            </p>
            <Button variant="contained" style={{width: '300px', backgroundColor: "#F96B6A", color:"#fff"}} component={Link} to="/quiz/1">
              Continue
            </Button>
          </div>
          <div style={{margin: 16}}>
            <p className="list-header">Your Journey</p>
          </div>
          <div className="timeline-on">
            <div className="circle">
              <div className="level">1</div>
              <div className="label">level</div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </ScreenHome>
    );
  }
}

const styles = {
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

export default withStyles(styles)(Quiz);
