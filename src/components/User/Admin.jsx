import React from 'react';
import PropTypes from 'prop-types';

const Admin = ({ adminData, logout }) => {
  const { name, email, role } = adminData;
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Role: {role}</li>
      <li>
        <button onClick={logout}>Log out</button>
      </li>
    </ul>
  );
};
Admin.propTypes = {
  adminData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }),
  logout: PropTypes.func.isRequired,
};

export default Admin;
