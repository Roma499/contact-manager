import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './FreeTimePage.css';
import FreeTimeLayout from '../freeTimeLayout/FreeTimeLayout';
import TimeScale from '../timeScale/TimeScale';
import DealForm from '../dealForm/DealForm';
import Header from '../../../header/Header';

class FreeTimePage extends Component {
  render() {
    return (
      <>
        <Header title="Contacts" link={{ text: '+ Add Deal', href: '/free/new' }} />
        <div className="free-time-page-container">
          <div className="free-time-page">
            <TimeScale />
            <FreeTimeLayout />
          </div>
          <Route path="/free/new" component={DealForm} />
        </div>
      </>
    );
  }
}

export default FreeTimePage;
