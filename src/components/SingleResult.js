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
      <div className="vt-singleresult"
        style={{ ...styles.container, background: this.props.color }}
        onClick={this.onClick}
      >
        {this.props.isCorrect ? <Check /> : <Close />}
        <Typography variant="title">
          {this.props.isCorrect ? 'Correct.' : 'Incorrect.'}
        </Typography>
        <Button
          variant="contained"
          fullWidth
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
    height: 100,
    margin: 16,
  },
};

export default SingleResult;

