import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Contact({ timestamp, duration}) {
	const date = new Date(timestamp).toLocaleString();

	return (
		<Typography gutterBottom align="left" component="span">
      date: {date}  duration: {duration} sec.
		</Typography>
	);
}