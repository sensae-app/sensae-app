import React from 'react';
import PropTypes from 'prop-types';

class ScreenHome extends React.Component {
  static propTypes = {};

  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div data-src="ScreenHome" style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
};

export default ScreenHome;
