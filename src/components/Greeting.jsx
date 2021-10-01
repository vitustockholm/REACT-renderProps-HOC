import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ render }) => {
  return render('small');
};
Greeting.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Greeting;
