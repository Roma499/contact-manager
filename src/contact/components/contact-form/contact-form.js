import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContactFormField from './contact-form-field';
import { validators, validateForm } from '../../../utils/validator';
import { contactPropType } from '../../contact.type';

const messages = {
  requaired: 'required',
  phone: 'Invalid phone',
  email: 'Invalid email'
};
const fields = {
  firstName: [
    {
      validator: validators.requaired,
      message: messages.requaired
    }
  ],
  lastName: [
    {
      validator: validators.requaired,
      message: messages.requaired
    }
  ],
  phone: [
    {
      validator: validators.requaired,
      message: messages.requaired
    },
    {
      validator: validators.phone,
      message: messages.phone
    }
  ],
  email: [
    {
      validator: validators.requaired,
      message: messages.requaired
    },
    {
      validator: validators.email,
      message: messages.email
    }
  ]
};

const validate = values => validateForm(fields, values);

const propTypes = {
  contact: contactPropType,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    if (props.contact) {
      props.initialize(props.contact);
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, contact } = this.props;
    return (
      <Card className="contact-list-item">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3">
            {contact ? 'Edit Contact' : 'Add New Contact'}
          </Typography>
        </CardContent>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Field name="firstName" type="text" component={ContactFormField} label="First Name" />
            <Field name="lastName" type="text" component={ContactFormField} label="Last Name" />

            <Field name="phone" type="text" component={ContactFormField} label="Phone" />
            <Field name="email" type="text" component={ContactFormField} label="Email" />
          </CardContent>
          <CardActions>
            <Button type="submit" disabled={pristine || submitting}>
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

ContactForm.propTypes = propTypes;

export default reduxForm({ form: 'contact', validate })(ContactForm);
