import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LevelSelectBubble from '../components/LevelSelectBubble';
import ScreenHome from '../components/ScreenHome';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/es/AppBar/AppBar';
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import logo from '../images/logo.png';
import withStyles from '@material-ui/core/es/styles/withStyles';

class Quiz extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
            <img src={logo} className="img-header" alt="Sensae Logo" />
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
              Acuity sharpens your perception of color and expands your sensory vocabulary.
            </p>
            {/*<Button variant="contained" style={{width: '300px', backgroundColor: "#F96B6A", color:"#fff"}} >*/}
            {/*Continue*/}
            {/*</Button>*/}
          </div>
          <div style={{ margin: 24 }}>
            <p className="list-header">Your journey begins...</p>
          </div>
          <LevelSelectBubble level={1} />
          <LevelSelectBubble level={2} />
          <LevelSelectBubble level={3} />
          <LevelSelectBubble level={4} hideLine />
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
