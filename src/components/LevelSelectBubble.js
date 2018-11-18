import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { accuitySettings } from '../contstants/quizSettings';

class LevelSelectBubble extends React.PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    hideLine: PropTypes.bool,
  };

  static defaultProps = {
    hideLine: false,
  };

  handleClick = () => {
    this.props.history.replace('/instructions');
    accuitySettings.selectedRound = this.props.level - 1;
  };

  render() {
    return (
      <div className="timeline timeline-on" onClick={this.handleClick}>
        <div className="line" style={{ display: this.props.hideLine ? 'none' : 'block' }} />
        <div className="circle">
          <div className="level">{this.props.level}</div>
          <div className="label">level</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LevelSelectBubble);
