import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './contact-list-item.css';


export default function ContactListItem(props) {
	const { contact, deleteContact } = props;
	return (

		<Card className="contact-list-item">

			<CardContent>
				<Typography gutterBottom variant="headline" component="h3">
					{contact.firstName} {contact.lastName}
				</Typography>

			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					<Link to={`/contacts/${contact.id}`} className="ui basic button green">Show more</Link>
				</Button>
				<Button size="small" color="secondary" onClick={() => deleteContact(contact.id)}>
                        Delete
				</Button>
			</CardActions>
		</Card>
	);
}

ContactListItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
