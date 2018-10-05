import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  timestamp: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};

function Contact({ timestamp, duration }) {
  const date = new Date(timestamp).toLocaleString();

  return (
    <Typography gutterBottom align="left" component="span">
      date: {date} duration: {duration} sec.
    </Typography>
  );
}

Contact.propTypes = propTypes;

export default Contact;
