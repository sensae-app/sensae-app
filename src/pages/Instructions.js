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
        <div className="vt-body" style={{ width: 400 }}>
          <h2>How to Play</h2>
          <div style={styles.step}>
            <div style={styles.number}>1</div>
            <p>A letter will be presented in its associated color.</p>
          </div>
          <div style={styles.step}>
            <div style={styles.number}>2</div>
            <p>Focus on the color and its exact shade.</p>
          </div>
          <div style={styles.step}>
            <div style={styles.number}>3</div>
            <p>After a few seconds the letter will be replace by two color swatches.</p>
          </div>
          <div style={styles.step}>
            <div style={styles.number}>4</div>
            <p>Your goal is to select the color that matches the color letter you were shown before.</p>
          </div>
          <Link to="/quiz/1">
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: '#F96B6A', color: '#fff' }}
            >
              Start Session
            </Button>
          </Link>

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
  step: {
    display: 'flex',
  },
  number: {
    background: '#6BC1F0',
    height: 30,
    width: 30,
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 24,
    flexShrink: 0,
  },
};

export default withStyles(styles)(Quiz);
