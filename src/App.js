import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkiDaysList from './Components/SkiDaysList'
import {SkiDaysCount} from './Components/SkiDaysCount'
import {AddDayForm} from './Components/AddDayForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      allSkiDays : [
            {
              resort: "Squaw Valley",
              date: new Date("1/2/2016"),
              powder: true,
              backcountry: false
            },
            {
              resort: "Kirkwood",
              date: new Date("3/28/2016"),
              powder: false,
              backcountry: false
            },
            {
              resort: "Mt. Tallac",
              date: new Date("4/2/2016"),
              powder: false,
              backcountry: true
            }
          ]
    }
  }
  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(
      // pass in day param - if filter is true return day[filter] else return day
      (day) => (filter) ? day[filter] : day
      ).length
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {(this.props.location.pathname === "/") ? 
                      <SkiDaysCount total={this.countDays()}
                      powder={this.countDays("powder")}
                      backcountry={this.countDays("backcountry")}
                      goal={100} /> : 
                      (this.props.location.pathname === "/add-day") ? 
                      <AddDayForm /> : 
                      <SkiDaysList days={this.state.allSkiDays} /> }
        
        {/*<SkiDaysCount />*/}
        
        {/*<SkiDaysCount total={50}
                      powder={20}
                      backcountry={10}
                      goal={100} />*/}
        {/*<SkiDaysCount total={this.props.total}
                      powder={this.props.powder}
                      backcountry={this.props.backcountry}
                      goal={this.props.goal} />*/}
                      {/*{this.state.allSkiDays[0]["resort"]}*/}
      </div>
    );
  }
}

export default App;
