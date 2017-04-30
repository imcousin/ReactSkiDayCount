import React, { Component } from 'react';
// import './SkiDaysList.css';
import SkiDayRow from './SkiDayRow';
// import Calendar from 'react-icons/lib/fa/calendar';
// import PropTypes from 'prop-types'; 

class SkiDaysList extends Component {
  render() {
    const {days} = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>Backcountry</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day,i) => 
            <SkiDayRow key={i} 
                        {
                        /*resort={day.resort}
                        date={day.date}
                        powder={day.powder}
                        backcountry={day.backcountry}*/
                        // ... is combining into object
                        ...day} />
          )}
        </tbody>
      </table>
    );
  }
}

// Must import proptype at top
/*SkiDayList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error("SkiDayList should be an array")
    } else if(!props.days.length) {
      return new Error("SkiDayList must have at lease one record")
    } else {
      return null
    }
  }
}*/

export default SkiDaysList;
