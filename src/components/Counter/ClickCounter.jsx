import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ClickCounter = ({ count, increment }) => {
  return <button onClick={increment}>Count: {count}</button>;
};

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
export default ClickCounter;
