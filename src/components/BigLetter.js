import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class BigLetter extends React.PureComponent {
  static propTypes = {
    association: PropTypes.shape({
      color: PropTypes.string.isRequired,
      letter: PropTypes.string.isRequired,
    }),
  };

  render() {
    return (
      <Typography className="vt-bigletter" noWrap variant="h1" style={{ color: this.props.association.color }}>
        {this.props.association.letter}
      </Typography>
    );
  }
}

export default BigLetter;
