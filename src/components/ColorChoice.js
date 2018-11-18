import React from 'react';
import PropTypes from 'prop-types';

class ColorChoice extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
  };
  handleClick = () => {
    this.props.onClick(this.props.isCorrect);
  };

  render() {
    return (
      <div className="vt-colorchoice"
        style={{ ...styles.container, background: this.props.color }}
        onClick={this.handleClick}
      />
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

export default ColorChoice;

