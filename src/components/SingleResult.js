import React from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';

class SingleResult extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  };

  state = {
    countdown: 3,
  };

  componentDidMount() {
    this.countdownTimer = setInterval(this.progress, 400);
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
  }

  progress = () => {
    this.setState(({ countdown }) => {
      if (countdown === 1) {
        clearInterval(this.countdownTimer);
        this.props.onClick();
      }
      return {
        countdown: countdown - 1,
      };
    });
  };

  render() {
    return (
      <div className="vt-singleresult">
        {this.props.isCorrect ? <Check style={styles.icon} /> : <Close style={styles.icon} />}
        <h3>
          {this.props.isCorrect ? 'Correct!' : 'Incorrect.'}
        </h3>
        <div style={styles.number}>{this.state.countdown}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: 300,
    // backgroundColor: 'rgba(0,0,0,.03)',
    borderRadius: 4,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32,
  },
  icon: {
    color: '#6BC1F0',
    fontSize: 240,
  },
  number: {
    background: '#C5E6F5',
    height: 30,
    width: 30,
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 24,
    flexShrink: 0,
    fontFamily: 'Arial',
    margin: 'auto',
  },
};

export default SingleResult;

