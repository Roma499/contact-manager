import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Call from './Call';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contact: contactPropType,
  deleteContact: PropTypes.func.isRequired
};

function Contact(props) {
  const { contact, deleteContact } = props;
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Name: {contact.firstName} {contact.lastName}
        </Typography>
        <Typography gutterBottom variant="subheading" component="h3">
          Phone: {contact.phone}
        </Typography>
        <Typography gutterBottom variant="subheading" component="h3">
          Email: {contact.email}
        </Typography>
        {contact.calls && (
          <div>
            <Typography gutterBottom variant="body2" component="h2">
              Calls:
            </Typography>
            {contact.calls.map(call => (
              <Call key={call.timestamp} {...call} />
            ))}
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/contacts/edit/${contact.id}`}>Edit</Link>
        </Button>
        <Button size="small" color="secondary" onClick={() => deleteContact(contact.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Contact.propTypes = propTypes;

export default Contact;
