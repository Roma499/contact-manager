import { connect } from 'react-redux';
import { saveContact } from '../../actions';
import ContactForm from '../contactForm/ContactForm';

export default connect(
  null,
  { onSubmit: saveContact }
)(ContactForm);
