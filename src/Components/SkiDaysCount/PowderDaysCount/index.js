import React, { Component } from 'react';
// import './PowderDaysCount.css';
import SnowFlake from 'react-icons/lib/ti/weather-snow'

class PowderDaysCount extends Component {
  render() {
    const { powder } = this.props;
    return (
      <div className="PowderDaysCount">
        <p>{powder} <SnowFlake />days</p>
      </div>
    );
  }
}

export default PowderDaysCount;

/*import React from 'react';
// import './PowderDaysCount.css';

export const PowderDaysCount = (props) => (
      <div className="PowderDaysCount">
        <p>{props.powder}</p>
      </div>
    );*/