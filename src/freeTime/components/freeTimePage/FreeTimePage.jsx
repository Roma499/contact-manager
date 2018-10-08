import React, { Component } from 'react';
import './FreeTimePage.css';
import FreeTimeLayout from '../freeTimeLayout/FreeTimeLayout';
import TimeScale from '../timeScale/TimeScale';

class FreeTimePage extends Component {
  render() {
    return (
      <div className="free-time-page">
        <TimeScale />
        <FreeTimeLayout />
      </div>
    );
  }
}

export default FreeTimePage;
