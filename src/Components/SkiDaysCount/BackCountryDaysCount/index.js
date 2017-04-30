import React, { Component } from 'react';
// import './BackCountryDaysCount.css';
import Terrain from 'react-icons/lib/md/terrain'

class BackCountryDaysCount extends Component {
  render() {
    const { backcountry } = this.props;

    return (
      <div className="BackCountryDaysCount">
        <p>{backcountry} <Terrain />hiking day</p>
      </div>
    );
  }
}

export default BackCountryDaysCount;


/*import React from 'react';
export const BackCountryDaysCount = (props) => (
      <div className="BackCountryDaysCount">
        <p>{props.backcountry} hiking day</p>
      </div>
    );*/