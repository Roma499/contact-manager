import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactPage from '../contact/contact';
import NoMatch from '../noMatch/NoMatch';
import './App.css';
import FreeTimePage from '../freeTime/components/freeTimePage/FreeTimePage';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/free" />
          </Route>
          <Route path="/contacts" component={ContactPage} />
          <Route path="/free" component={FreeTimePage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
