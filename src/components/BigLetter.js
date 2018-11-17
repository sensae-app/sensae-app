import React from 'react';

class BigLetter extends React.PureComponent {
  static propTypes = {};

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

export default BigLetter;
