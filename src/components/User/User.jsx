import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userData, logout }) => {
  const { name, email } = userData;
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>
        <button onClick={logout}>Log out</button>
      </li>
    </ul>
  );
};
User.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func.isRequired,
};

export default User;
