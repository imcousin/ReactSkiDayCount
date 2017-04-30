import React from 'react';
// import './SkiDaysCount.css';
import TotalDaysCount from './TotalDaysCount';
import PowderDaysCount from './PowderDaysCount';
import BackCountryDaysCount from './BackCountryDaysCount';
import GoalCount from './GoalCount';
// import PropTypes from 'prop-types'; 


//stateless function
const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
  }

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

export const SkiDaysCount = ({total,powder,backcountry,goal}) => (
      <div className="SkiDaysCount">
        <TotalDaysCount total={total} />
        <PowderDaysCount powder={powder} />
        <BackCountryDaysCount backcountry={backcountry} />
        <GoalCount goal={calcGoalProgress(total, goal)} />
      </div>
);

// this or set in render {total=100, powder=20, backcountry=10, goal=100}
/*SkiDaysCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 75
}*/

// Must import proptype at top
/*SkiDaysCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}*/