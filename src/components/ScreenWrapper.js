import React from 'react';
import PropTypes from 'prop-types';

class ScreenWrapper extends React.Component {
  static propTypes = {};

  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
};

export default ScreenWrapper;
