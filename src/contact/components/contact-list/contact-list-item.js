import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './contact-list-item.css';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contact: contactPropType.isRequired,
  deleteContact: PropTypes.func.isRequired
};

function ContactListItem({ contact, deleteContact }) {
  return (
    <Card className="contact-list-item">
      <CardContent>
        <Typography gutterBottom variant="headline" component="h3">
          {contact.firstName} {contact.lastName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/contacts/${contact.id}`}>Show more</Link>
        </Button>
        <Button size="small" color="secondary" onClick={() => deleteContact(contact.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

ContactListItem.propTypes = propTypes;

export default ContactListItem;
