import React from 'react';
import PropTypes from 'prop-types';

const SetCookie = ({ render }) => {
  const cookie = () => {
    localStorage.setItem('cookie', cookie);
    console.log(cookie.name);
    alert(cookie);
  };

  return render(cookie);
};
SetCookie.propTypes = {
  render: PropTypes.func.isRequired,
};
export default SetCookie;
