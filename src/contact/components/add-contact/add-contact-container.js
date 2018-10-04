import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveContact } from '../../actions';
import ContactForm from '../contact-form/contact-form';

const propTypes = {
  saveContact: PropTypes.func.isRequired
};

class AddContactContainer extends Component {
  render() {
    return <ContactForm onSubmit={this.props.saveContact} />;
  }
}

AddContactContainer.propTypes = propTypes;

export default connect(
  null,
  { saveContact }
)(AddContactContainer);
