import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ScreenWrapper from '../components/ScreenWrapper';
import colorAssociations from '../contstants/associations';
import steps from '../contstants/quizSteps';

class QuizStep extends React.Component {
  state = {
    showLetter: true,
  };

  componentDidMount() {
    console.log('------------componentDidMount------------');
    this.startTimer();
  }

  componentWillUnmount() {
    // this.timer();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match && props.match.params && props.match.params.step) {
      return { step: parseInt(props.match.params.step, 10) };
    }
    return {
      step: 0,
    };
  }

  startTimer = () => {
    this.timer = setTimeout(() => {
      this.setState({ showLetter: false });
    }, 3000);
  };

  getNextStep = () => {
    if (this.state.step && (this.state.step + 1) < Object.keys(steps).length) {
      return `/quiz/${this.state.step + 1}`;
    }
    return '/';
  };

  goToNext = () => {
    this.setState({ showLetter: true }, () => {
      this.props.history.replace(this.getNextStep());
      this.startTimer();
    });
  };

  getContent = () => {
    const step = steps[this.state.step];
    const association = colorAssociations.find(a => a.letter === step.letter);
    console.log('step.altColor', step.altColor);
    console.log('association.color', association.color);
    if (this.state.showLetter) {
      return (
        <Typography noWrap variant="h1" style={{ color: association.color, textDecoration: 'none' }}>
          {association.letter}
        </Typography>
      );
    }
    return (
      <div style={{ flexDirection: 'column' }}>
        <div
          style={{ background: association.color, width: 300, height: 100, margin: 16 }}
          onClick={this.goToNext}
        />
        <div
          style={{ background: step.altColor, width: 300, height: 100, margin: 16 }}
          onClick={this.goToNext}
        />
        <div
          style={{ background: step.altColor, width: 300, height: 100, margin: 16 }}
          onClick={this.goToNext}
        />
      </div>
    );
  };

  render() {
    return (
      <ScreenWrapper>
        {this.getContent()}
      </ScreenWrapper>
    );
  }
}

export default withRouter(QuizStep);
