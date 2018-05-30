import React from 'react';
import ContactListItem from './contact-list-item';
import Grid from '@material-ui/core/Grid';
import './contact-list.css';


export default function ContactList({ contacts, deleteContact }) {
	return (
		<div>
			<Grid container direction="column" justify="center" spacing={8}>
				{
					contacts.map(contact => (
						<Grid key={contact.id} item>
							<ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
						</Grid>
					))
				}

			</Grid>
		</div>
	);
}

