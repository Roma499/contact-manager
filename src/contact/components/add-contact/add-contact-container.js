import React, { Component} from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { createContact, saveContact } from '../../contact-actions';
import ContactForm from '../contact-form/contact-form';


class AddContactContainer extends Component {

		componentDidMount() {
				this.props.createContact();
		};

		submit = (contact) => {

            return this.props.saveContact(contact)
                .then(response => this.props.history.goBack())
                .catch(err => {
                        throw new SubmissionError(this.props.errors)
                })

		};

		render() {
				return <ContactForm contact={this.props.contact} onSubmit={this.submit} />
		}
}

function mapStateToProps(state) {
		return {
				contact: state.contactStore.contact,
				errors: state.contactStore.errors
		}
}

export default connect(mapStateToProps, {createContact, saveContact})(AddContactContainer);
