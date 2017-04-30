import React, { Component } from 'react';
// import './TotalDaysCount.css';
import Calendar from 'react-icons/lib/fa/calendar'

class TotalDaysCount extends Component {
  render() {
    const { total } = this.props;
    
    return (
      <div className="TotalDaysCount">
        <p>{total} <Calendar />days</p>
      </div>
    );
  }
}

export default TotalDaysCount;

/*import React from 'react';
// import './TotalDaysCount.css';

export const TotalDaysCount = (props) => (
      <div className="TotalDaysCount">
        <p>{props.total}</p>
      </div>
    );*/