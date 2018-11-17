import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import logo from '../images/logo.png';

class Home extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <Typography noWrap variant={'h1'}>
          Welcome
        </Typography>
        <img src={logo} alt="Sensae Logo" />
        <Button variant="text" component={Link} to="/quiz">
          Continue
        </Button>
      </ScreenWrapper>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
  },
};

export default Home;
