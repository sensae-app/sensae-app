import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import BigLetter from '../components/BigLetter';
import ColorChoices from '../components/ColorChoices';
import ScreenWrapper from '../components/ScreenWrapper';
import colorAssociations from '../contstants/associations';
import steps from '../contstants/quizSteps';

class QuizStep extends React.Component {
  state = {
    showLetter: true,
    numberCorrect: 0,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  static getDerivedStateFromProps(props) {
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
    }, 1000);
  };

  getNextStep = () => {
    return `/quiz/${this.state.step + 1}`;
  };

  handleSubmit = (isCorrect) => {
    this.setState((state) => {
      return {
        showLetter: true,
        numberCorrect: isCorrect ? state.numberCorrect + 1 : state.numberCorrect,
      };
    }, () => {
      this.props.history.replace(this.getNextStep());
      this.startTimer();
    });
  };

  renderContent = () => {
    const step = steps[this.state.step];
    let association = null;
    if (step) {
      association = colorAssociations.find(a => a.letter === step.letter);
    }

    if (association) {
      if (this.state.showLetter) {
        return (
          <BigLetter association={association} />
        );
      }

      return (
        <ColorChoices
          onSelect={this.handleSubmit}
          association={association}
        />
      );
    }

    return (
      <div>
        <Typography>You got {this.state.numberCorrect} Correct!</Typography>
        <Button
          variant="text"
          component={Link}
          to="/quiz"
        >
          Try Again
        </Button>
      </div>
    );
  };

  render() {
    return (
      <ScreenWrapper>
        {this.renderContent()}
        Correct: {this.state.numberCorrect}
      </ScreenWrapper>
    );
  }
}

export default withRouter(QuizStep);
