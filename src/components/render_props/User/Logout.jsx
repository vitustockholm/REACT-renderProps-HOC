import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({ render }) => {
  const logout = () => {
    alert('Logout!');
  };
  return render(logout);
};

Logout.propTypes = {
  render: PropTypes.func.isRequired,
};
export default Logout;
