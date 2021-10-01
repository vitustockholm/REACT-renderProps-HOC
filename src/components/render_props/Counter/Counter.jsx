import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ render }) => {
  // Hooks
  //--- state
  const [count, setCount] = useState(0);

  //Custom Functions
  const increment = () => setCount((prev) => prev + 1);
  //
  return render(count, increment);
};

Counter.propTypes = {
  render: PropTypes.func.isRequired,
};
export default Counter;
