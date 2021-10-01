import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HoverCounter = ({ count, increment }) => {
  return <button onMouseOver={increment}>HoverCount: {count}</button>;
};

HoverCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
export default HoverCounter;
