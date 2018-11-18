import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import BigLetter from '../components/BigLetter';
import ColorChoices from '../components/ColorChoices';
import CloseIcon from '@material-ui/icons/Close';
import SingleResult from '../components/SingleResult';
import colorAssociations from '../contstants/associations';
import { accuitySettings } from '../contstants/quizSettings';
import './Home.scss'; // Global Styles
import './QuizStep.scss';
import ScreenHome from '../components/ScreenHome';
import AppBar from '@material-ui/core/es/AppBar/AppBar';
import Toolbar from '@material-ui/core/es/Toolbar/Toolbar';
import withStyles from '@material-ui/core/es/styles/withStyles';
import IconButton from '@material-ui/core/es/IconButton/IconButton';
import Check from '@material-ui/icons/Check';

const views = {
  LETTER: 'LETTER',
  CHOICE: 'CHOICE',
  RESULT: 'RESULT',
  DONE: 'DONE',
};

class QuizStep extends React.Component {
  state = {
    view: views.LETTER,
    numberCorrect: 0,
    numberIncorrect: 0,
    lastResult: null,
  };

  componentDidMount() {
    this.showLetter();
    this.round = accuitySettings.rounds[accuitySettings.selectedRound];
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
      }, this.round.speed);
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
        numberIncorrect: isCorrect ? state.numberIncorrect : state.numberIncorrect + 1,
      };
    });
  };

  handleClose = () => {
    this.props.history.replace('/');
  };

  repeat = () => {
    this.showLetter();
  };

  proceed = () => {
    if (this.state.step < 11) {
      this.showLetter();
    } else {
      this.done();
    }
    this.props.history.replace(this.getNextStep());
  };

  done = () => {
    localStorage.setItem('highestCompletedLevel', accuitySettings.selectedRound + 1);
    this.setState({ view: views.DONE });
  };

  renderContent = () => {

    const step = accuitySettings.steps[this.state.step];
    let association = {};
    if (step) {
      association = colorAssociations.find(a => a.letter === step.letter);
    }

    switch (this.state.view) {
      case views.LETTER: {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
            <p style={{ marginBottom: 100, textAlign: 'center' }}>Remember this color/letter association.</p>
            <BigLetter association={association} />
          </div>

        );
      }
      case views.CHOICE: {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 24 }}>
            <p style={{ textAlign: 'center' }}>Select the color that matches the letter you just saw.</p>
            <ColorChoices
              onSelect={this.handleSubmit}
              association={association}
            />
          </div>
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
      case views.DONE: {
        return (
          <div style={{
            width: 600, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div className={this.props.classes.doneContainer}>
              <Check style={styles.icon} />
              <h3>Level {accuitySettings.selectedRound + 1} Complete</h3>
              <Button
                variant="contained"
                component={Link}
                style={{ width: '300px', backgroundColor: '#F96B6A', color: '#fff' }}
                to="/quiz"
              >
                Return to overview
              </Button>
            </div>
            <div className="vt-header">
              <h2>Well done, Grasshopper.</h2>
              <p>Keep up your training and you will achieve the competitive edge.</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }

    return null;
  };

  render() {
    const { classes } = this.props; // Modified from component lib
    return (
      <ScreenHome>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Sensae
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {this.renderContent()}
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
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  content: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  doneContainer: {
    borderRadius: 4,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32,
    width: 300,
  },
  icon: {
    color: '#6BC1F0',
    fontSize: 240,
  },
};

export default withStyles(styles)(withRouter(QuizStep));
