import React from 'react';
// import './SkiDaysCount.css';
import TotalDaysCount from './TotalDaysCount';
import PowderDaysCount from './PowderDaysCount';
import BackCountryDaysCount from './BackCountryDaysCount';
import GoalCount from './GoalCount';
import PropTypes from 'prop-types'; 

/*class SkiDaysCount extends Component {
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }

  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }

  render() {
    const {total=111, powder=22, backcountry=30, goal=76} = this.props;
    return (
      <div className="SkiDaysCount">
        <TotalDaysCount total={total} />
        <PowderDaysCount powder={powder} />
        <BackCountryDaysCount backcountry={backcountry} />
        <GoalCount goal={this.calcGoalProgress(total, goal)} />
      </div>
    );
  }
}*/


//stateless function

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
  }

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

//use with
{/*<SkiDaysCount props={{total:59,powder:20,backcountry:10,goal:100}} />*/}

export const SkiDaysCount = ({props}) => (
      <div className="SkiDaysCount">
        {props.total}
        {/*<TotalDaysCount total={props.total} />
        <PowderDaysCount powder={props.powder} />
        <BackCountryDaysCount backcountry={props.backcountry} />
        <GoalCount goal={calcGoalProgress(props.total, props.goal)} />*/}
      </div>
);

/*
// this or set in render {total, powder, backcountry, goal}
SkiDaysCount.defaultProps = {
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

// export default SkiDaysCount;
