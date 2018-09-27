import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ContactListContainer from '../contact/components/contact-list/contact-list-container';
import ContactContainer from '../contact/components/contact/contact-container';
import AddContactContainer from '../contact/components/add-contact/add-contact-container';
import EditContactContainer from '../contact/components/edit-contact/edit-contact-container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              spacing={16}
              alignItems="center"
              direction="row"
              justify="space-between"
            >
              <Link to="/" className="app-header-link">
                <Typography variant="title" color="inherit">
                  Contacts
                </Typography>
              </Link>
              <Link to="/contacts/new" className="app-header-link">
                + Add Contact
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={ContactListContainer} />
          <Route path="/contacts/new" component={AddContactContainer} />
          <Route path="/contacts/edit/:id" component={EditContactContainer} />
          <Route path="/contacts/:id" component={ContactContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
