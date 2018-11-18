import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ScreenHome from '../components/ScreenHome';
import logo from '../images/logo.png';
import listImage1 from '../images/list-image-1.png';
import listImage2 from '../images/list-image-2.png';
import listImage3 from '../images/list-image-3.png';
import './Home.scss';

class Home extends React.Component {

  render() {
    const { classes } = this.props; // Modified from component lib
    return (
      <ScreenHome>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <img src={logo} className="img-header" alt="Sensae Logo" />
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Sensae
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        {/* END HEADER */}

        <div className="vt-body">
          <div className="vt-header">
            <h2> Welcome Grasshopper.</h2>
            <p>Enrich your experience of the world through synesthesia training.</p>
          </div>
          {/*LIST*/}
          <p className="list-header">Training Games</p>
          <div className="vt-card">
            <img src={listImage1} alt="Stroop Test" />
            <h3>Stroop Test</h3>
            <p>How synesthetic are you? This quiz determines your baseline synesthesia skills. </p>
          </div>
          <Link to="/quiz">
            <div className="vt-card">
              <img src={listImage2} alt="Accuity Training" />
              <h3>Accuity Training</h3>
              <p>Determine whether or not you are synesthetic with this baseline quiz</p>
            </div>
          </Link>
          <div className="vt-card">
            <img src={listImage3} alt="New N-Back" />
            <h3>New N-Back</h3>
            <p>How synesthetic are you? This quiz determines your baseline synesthesia skills. </p>
          </div>
          <div className="vt-card">
            <img src={listImage3} alt="Association" />
            <h3>Association</h3>
            <p>How synesthetic are you? This quiz determines your baseline synesthesia skills. </p>
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

export default withStyles(styles)(Home);
