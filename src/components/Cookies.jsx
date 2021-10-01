import React from 'react';
import PropTypes from 'prop-types';

const Cookies = ({ instantData, cookie }) => {
  const { id, name } = instantData;
  const { subscription, cookieId, cookieName } = cookie;
  return (
    <ul>
      <li>id: {id}</li>
      <li>name: {name}</li>
      <li>
        <button onClick={cookie}>Ask FOR Subscription</button>
      </li>
    </ul>
  );
};

export default Cookies;
