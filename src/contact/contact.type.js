import PropTypes from 'prop-types';

const callPropType = PropTypes.shape({
  duration: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired
});

export const contactPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  calls: PropTypes.arrayOf(callPropType)
});
