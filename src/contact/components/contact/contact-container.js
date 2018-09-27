import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact, fetchContact } from '../../contact.actions';
import { contactPropType } from '../../contact.type';
import Contact from './contact';

const propTypes = {
    contact: contactPropType,
    fetchContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    props.fetchContact(id)
  }

  render() {
    return (
      this.props.contact && (
        <Contact
          contact={this.props.contact}
          deleteContact={this.props.deleteContact}
        />
      ) 
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact
  };
}

ContactContainer.propTypes = propTypes;

export default connect(mapStateToProps, { fetchContact, deleteContact })(ContactContainer);