import React from 'react';
import PropTypes from 'prop-types';

class ScreenWrapper extends React.Component {
  static propTypes = {};

  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div className="vt-quizwrapper">
        <div class="vt-quizheader">
          <h4> Acuity </h4>
          <p>Select the color that matches the color you saw</p>
          <div class="cross">x</div>
        </div>
        {/* Below is Ian's Code */}
        <div className="vt-quizwrapper-sub" style={styles.container}>
          {this.props.children}
        </div>
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
    background: 'rgba(196, 188, 150)',
    // Vt-Extra Styles
    height: "100vh"
  },
};

export default ScreenWrapper;
