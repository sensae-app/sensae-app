import React from 'react';

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
  container: {},
};

export default ScreenHome;
