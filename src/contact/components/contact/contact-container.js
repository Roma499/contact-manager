import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { deleteContact, fetchContact } from "../../contact-actions";
import Contact from "./contact";

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchContact(id);
    } else {
      this.setState({ redirect: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/" />
        ) : (
          <Contact
            contact={this.props.contact}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }

  deleteContact(id) {
    this.props.deleteContact(id);
    this.setState({ redirect: true });
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact
  };
}

export default connect(
  mapStateToProps,
  { fetchContact, deleteContact }
)(ContactContainer);
