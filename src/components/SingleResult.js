import React from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SingleResult extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className="vt-singleresult">
        {this.props.isCorrect ? <Check style={styles.icon}/> : <Close style={styles.icon}/>}
        <h3>
          {this.props.isCorrect ? 'Correct!' : 'Incorrect.'}
        </h3>
        <Button
          variant="contained"
          fullWidth
          style={{width: '300px', backgroundColor: "#F96B6A", color:"#fff"}}
          onClick={this.props.onClick}
        >
          {this.props.isCorrect ? 'Next' : 'Try Again'}
        </Button>
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
  }
};

export default SingleResult;

