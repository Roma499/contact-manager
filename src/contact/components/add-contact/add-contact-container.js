import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveContact } from '../../contact.actions';
import ContactForm from '../contact-form/contact-form';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contact: contactPropType,
  errors: PropTypes.object,
  saveContact: PropTypes.func.isRequired
};

class AddContactContainer extends Component {
  submit = contact => {
    return this.props.saveContact(contact).catch(err => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  };
}

AddContactContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { saveContact }
)(AddContactContainer);
