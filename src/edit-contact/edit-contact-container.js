import React, { Component} from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { fetchContact, updateContact } from '../actions/contact-actions';
import ContactForm from '../contact-form/contact-form';


class EditContactContainer extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.fetchContact(id)
    };

    submit = (contact) => {
        return this.props.updateContact(contact)
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

export default connect(mapStateToProps, {fetchContact, updateContact})(EditContactContainer);
