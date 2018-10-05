import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchContact, updateContact } from '../../actions';
import ContactForm from '../contactForm/ContactForm';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contact: contactPropType,
  fetchContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired
};

class EditContactContainer extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    props.fetchContact(id);
  }

  render() {
    return (
      this.props.contact && (
        <ContactForm contact={this.props.contact} onSubmit={this.props.updateContact} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact
  };
}

EditContactContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  { fetchContact, updateContact }
)(EditContactContainer);
