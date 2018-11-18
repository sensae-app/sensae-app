import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import BigLetter from '../components/BigLetter';
import ColorChoices from '../components/ColorChoices';
import ScreenWrapper from '../components/ScreenWrapper';
import SingleResult from '../components/SingleResult';
import colorAssociations from '../contstants/associations';
import steps from '../contstants/quizSteps';
import './Home.scss'; // Global Styles
import './QuizStep.scss';

const views = {
  LETTER: 'LETTER',
  CHOICE: 'CHOICE',
  RESULT: 'RESULT',
};

class QuizStep extends React.Component {
  state = {
    view: views.LETTER,
    numberCorrect: 0,
    lastResult: null,
  };

  componentDidMount() {
    this.showLetter();
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

  showLetter = () => {
    // Set the view to show the letter
    this.setState({ view: views.LETTER }, () => {
      // After some time, change the view the choice prompt
      this.timer = setTimeout(() => {
        this.setState({ view: views.CHOICE });
      }, 9000); // Delay Timer so I can style
    });
  };

  getNextStep = () => {
    return `/quiz/${this.state.step + 1}`;
  };

  handleSubmit = (isCorrect) => {
    this.setState((state) => {
      return {
        view: views.RESULT,
        lastResult: isCorrect,
        numberCorrect: isCorrect ? state.numberCorrect + 1 : state.numberCorrect,
      };
    });
  };

  repeat = () => {
    this.showLetter();
  };

  proceed = () => {
    this.showLetter();
    this.props.history.replace(this.getNextStep());
  };

  renderContent = () => {

    const step = steps[this.state.step];
    let association = null;
    if (step) {
      association = colorAssociations.find(a => a.letter === step.letter);
    }

    if (association) {
      switch (this.state.view) {
        case views.LETTER: {
          return (
            <BigLetter association={association} />
          );
        }
        case views.CHOICE: {
          return (
            <ColorChoices
              onSelect={this.handleSubmit}
              association={association}
            />
          );
        }
        case views.RESULT: {
          return (
            <SingleResult
              isCorrect={this.state.lastResult}
              onClick={this.state.lastResult ? this.proceed : this.repeat}
            />
          );
        }
        default:
          return null;
      }
    }

    return (
      <div className="vt-end">
        <Typography>You got {this.state.numberCorrect} Correct!</Typography>
        <Button data-src="vt-end"
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
