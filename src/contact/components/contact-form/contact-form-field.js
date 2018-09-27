import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

function ContactFormField({
	input, label, type, meta: { touched, error },
}) {
	return (
		<FormControl className="contact-form-field" error={!!(touched && error)} aria-describedby="name-error-text">
			<InputLabel htmlFor="name-error">{label}</InputLabel>
			<Input {...input} placeholder={label} type={type} />
			{touched && error && <FormHelperText id="name-error-text">{error}</FormHelperText>}
		</FormControl>
	);
}
export default ContactFormField
