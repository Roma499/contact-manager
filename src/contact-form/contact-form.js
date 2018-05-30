import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ContactFormField from './contact-form-field'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const validate = (values) => {
    const errors = {name:{}};
    if(!values.firstName) {
        errors.firstName = {
            message: 'You need to provide First Name'
        }
    }
    if(!values.phone) {
        errors.phone = {
            message: 'You need to provide a Phone number'
        }
    } else if(!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.phone)) {
        errors.phone = {
            message: 'Phone number must be in International format'
        }
    }
    if(!values.email) {
        errors.email = {
            message: 'You need to provide an Email address'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
            message: 'Invalid email address'
        }
    }
    return errors;
};

class ContactForm extends Component {

    componentWillReceiveProps = (nextProps) => {
        const { contact } = nextProps;
        if(contact.id !== this.props.contact.id) {
            this.props.initialize(contact)
        }
    }

    render() {
        const { handleSubmit, pristine, submitting, contact } = this.props;
        return (
            <Card className="contact-list-item">

                <CardContent>
                    <Typography gutterBottom variant="headline" component="h3">
                        {contact.id ? 'Edit Contact' : 'Add New Contact'}
                    </Typography>
                </CardContent>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <Field name="firstName" type="text" component={ContactFormField} label="First Name"/>
                        <Field name="lastName" type="text" component={ContactFormField} label="Last Name"/>

                        <Field name="phone" type="text" component={ContactFormField} label="Phone"/>
                        <Field name="email" type="text" component={ContactFormField} label="Email"/>
                    </CardContent>
                    <CardActions>
                        <Button type='submit' disabled={pristine || submitting}>
                            Save
                        </Button>
                    </CardActions>
                </form>
            </Card>

        )
    }
}

export default reduxForm({form: 'contact', validate})(ContactForm);
