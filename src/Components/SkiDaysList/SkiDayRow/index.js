import React, { Component } from 'react';
// import './SkiDayRow.css'
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';

class SkiDayRow extends Component {
    render() {
        const {resort, date, powder, backcountry} = this.props;
        return (
            <tr>
                <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
                <td>{resort}</td>
                <td>{(powder) ? <SnowFlake /> : null}</td>
                <td>{(backcountry) ? <Terrain /> : null}</td>
            </tr>
        );
    }
}

export default SkiDayRow;