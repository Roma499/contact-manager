import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormSection, Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { saveDeal } from '../../actions';
import NumberField from '../../../shared/numberField/NumberField';
import { validators, validateForm } from '../../../utils/validator';
import styles from './DealForm.module.css';

const messages = {
  requaired: 'required'
};
const fields = {
  hours: [
    {
      validator: validators.requaired,
      message: messages.requaired
    }
  ],
  minutes: [
    {
      validator: validators.requaired,
      message: messages.requaired
    }
  ]
};

const validate = values => validateForm(fields, values);

const propTypes = {
  // contact: contactPropType,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
  // handleSubmit: PropTypes.func.isRequired
};

class DealForm extends Component {
  constructor(props) {
    super(props);
    if (props.contact) {
      props.initialize(props.contact);
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, contact } = this.props;
    return (
      <Card className={styles.container}>
        <Link className={styles.closeBtn} to="/free">
          Close
        </Link>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h3">
            {contact ? 'Edit Contact' : 'Add New Contact'}
          </Typography>
        </CardContent>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <h3>Start</h3>
            <FormSection name="start">
              <Field name="hours" type="number" component={NumberField} label="Hours" />
              <Field name="minutes" type="number" component={NumberField} label="Minutes" />
            </FormSection>
            <h3>Finish</h3>
            <FormSection name="finish">
              <Field name="hours" type="number" component={NumberField} label="Hours" />
              <Field name="minutes" type="number" component={NumberField} label="Minutes" />
            </FormSection>
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

DealForm.propTypes = propTypes;

export default connect(
  null,
  { onSubmit: saveDeal }
)(reduxForm({ form: 'deal', validate })(DealForm));
