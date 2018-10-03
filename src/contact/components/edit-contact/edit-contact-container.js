import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchContact, updateContact } from '../../contact.actions';
import ContactForm from '../contact-form/contact-form';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contact: contactPropType,
  errors: PropTypes.object,
  fetchContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired
};

class EditContactContainer extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    props.fetchContact(id);
  }

  submit = contact => {
    return this.props.updateContact(contact).catch(err => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    return (
      this.props.contact && <ContactForm contact={this.props.contact} onSubmit={this.submit} />
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  };
}

EditContactContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { fetchContact, updateContact }
)(EditContactContainer);
