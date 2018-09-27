import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from './contact-list';
import { fetchContacts, deleteContact } from '../../contact-actions';


class ContactListContainer extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}

	render() {
		return (
			<div>
				{
					this.props.contacts && this.props.contacts.length ?
						<ContactList
							contacts={this.props.contacts}
							deleteContact={this.props.deleteContact}
						/>
						: null
				}
				{
					this.props.contacts && !this.props.contacts.length ?
						<h1>
                            no contacts
						</h1>
						: null
				}
				{
					this.props.loading ?
						<h1>
                            ...loading
						</h1>
						: null
				}
				{
					this.props.error ?
						<h1>
                            problems on server
						</h1>
						: null
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contactStore.contacts,
		loading: state.contactStore.loading,
		errors: state.contactStore.errors,
	};
}

export default connect(mapStateToProps, { fetchContacts, deleteContact })(ContactListContainer);
