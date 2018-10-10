import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactListContainer from './components/contactList/ContactListContainer';
import ContactCardContainer from './components/contactCard/ContactCardContainer';
import AddContactContainer from './components/addContact/AddContactContainer';
import EditContactContainer from './components/editContact/EditContactContainer';
import Header from '../header/Header';

class ContactPage extends Component {
  render() {
    return (
      <>
        <Header title="Contacts" link={{ text: '+ Add Contact', href: '/contacts/new' }} />
        <Switch>
          <Route exact path={this.props.match.url} component={ContactListContainer} />
          <Route path="/contacts/new" component={AddContactContainer} />
          <Route path="/contacts/edit/:id" component={EditContactContainer} />
          <Route path="/contacts/:id" component={ContactCardContainer} />
        </Switch>
      </>
    );
  }
}

export default ContactPage;
