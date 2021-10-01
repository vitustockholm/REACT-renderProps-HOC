import PropTypes from 'prop-types';
import React from 'react'

//
import counter from './counter';

const HoverCounter = ({ count, increment }) => {
  return <button onMouseOver={increment}>Count (HOC) : {count}</button>;
};

HoverCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default counter(HoverCounter);
