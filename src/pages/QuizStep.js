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
import steps from '../contstants/quizSteps';
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
      }, 1000);
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
      <div style={{ width: 600, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' ,
      }}>
        <div className={this.props.classes.doneContainer}>
          <Check style={styles.icon}/>
          <h3>Level 1 Complete</h3>
          <p>You had to retry {this.state.numberIncorrect} times!</p>
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
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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
    // backgroundColor: 'rgba(0,0,0,.03)',
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
  }
};

export default withStyles(styles)(withRouter(QuizStep));
