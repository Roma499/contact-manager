import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styles from './NumberField.module.css';

function NumberField({ input, label, meta: { touched, error } }) {
  return (
    <FormControl
      className={styles.field}
      error={!!(touched && error)}
      aria-describedby="name-error-text"
    >
      <InputLabel htmlFor="name-error">{label}</InputLabel>
      <Input {...input} placeholder={label} type="number" min="1" max="5" />
      {touched && error && <FormHelperText id="name-error-text">{error}</FormHelperText>}
    </FormControl>
  );
}
export default NumberField;
