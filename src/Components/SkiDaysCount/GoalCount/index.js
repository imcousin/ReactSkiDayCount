import React, { Component } from 'react';
// import './GoalCount.css';

class GoalCount extends Component {
  render() {
    const { goal } = this.props;

    return (
      <div className="GoalCount">
        <p>{goal}</p>
      </div>
    );
  }
}

export default GoalCount;

/*import React from 'react';
// import './GoalCount.css';

export const GoalCount = (props) => (
      <div className="GoalCount">
        <p>{props.goal}</p>
      </div>
    );*/