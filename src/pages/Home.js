import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

class Home extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Typography noWrap variant={'h1'}>
          Welcome
        </Typography>
        <img src={logo} alt="Sensae Logo" />
        <Button variant="text" component={Link} to="/quiz">
          Continue
        </Button>
      </div>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
  },
};

export default Home;
