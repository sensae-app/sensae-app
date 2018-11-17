import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import colorAssociations from '../contstants/associations';
import steps from '../contstants/quizSteps';

class QuizStep extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    if (props.match && props.match.params && props.match.params.step) {
      return { step: parseInt(props.match.params.step, 10) };
    }
    return {
      step: 0,
    };
  }

  getNextStep = () => {
    if (this.state.step && (this.state.step + 1) < Object.keys(steps).length) {
      return `/quiz/${this.state.step + 1}`;
    }
    return '/';
  };

  render() {
    const step = steps[this.state.step];
    const association = colorAssociations.find(a => a.letter === step.letter);
    return (
      <ScreenWrapper>
        <Link to={this.getNextStep()}>
          <Typography noWrap variant="h1" style={{ color: association.color, textDecoration: 'none' }}>
            {association.letter}
          </Typography>
        </Link>
      </ScreenWrapper>
    );
  }
}

export default withRouter(QuizStep);
