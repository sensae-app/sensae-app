import React from 'react';
import PropTypes from 'prop-types';
import { adjustHSL } from '../helpers/color.helper';
import ColorChoice from './ColorChoice';

class ColorChoices extends React.PureComponent {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    association: PropTypes.shape({
      color: PropTypes.string.isRequired,
      letter: PropTypes.string.isRequired,
    }),
  };

  handleClick = (isCorrect) => {
    this.props.onSelect(isCorrect);
  };

  render() {
    const wrongColor = adjustHSL(this.props.association, 20).color;
    const isUpperCorrect = Math.random() > 0.5;
    const upperColor = isUpperCorrect ? this.props.association.color : wrongColor;
    const lowerColor = isUpperCorrect ? wrongColor : this.props.association.color;
    return (
      <div className="vt-colorchoices" style={{ flexDirection: 'column' }}>
        <ColorChoice
          color={upperColor}
          onClick={this.handleClick}
          isCorrect={isUpperCorrect}
        />
        <ColorChoice
          color={lowerColor}
          onClick={this.handleClick}
          isCorrect={!isUpperCorrect}
        />
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

export default ColorChoices;

