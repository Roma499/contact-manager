import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import ContactListItem from './ContactListItem';
import { contactPropType } from '../../contact.type';

const propTypes = {
  contacts: PropTypes.arrayOf(contactPropType),
  deleteContact: PropTypes.func.isRequired
};

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <Grid container direction="column" justify="center" spacing={8}>
        {contacts.map(contact => (
          <Grid key={contact.id} item>
            <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ContactList.propTypes = propTypes;

export default ContactList;
