import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import ContactPage from '../contact/contact';
import NoMatch from '../noMatch/NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/contacts" />
          </Route>
          <Route path="/contacts" component={ContactPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
