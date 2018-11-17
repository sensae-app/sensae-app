import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ScreenWrapper from '../components/ScreenWrapper';

class Home extends React.Component {
  render() {
    return (
      <ScreenWrapper>
        <div>
          <Typography noWrap variant="title">
            Pay close attention:
          </Typography>
        </div>
        <div>
          <Typography noWrap variant="title">
            There will be a quiz at the end. ;)
          </Typography>
        </div>
        <Button variant="text">
          Continue
        </Button>
      </ScreenWrapper>
    );
  }
}

export default Home;
