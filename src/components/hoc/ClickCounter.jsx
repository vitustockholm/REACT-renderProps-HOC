import PropTypes from 'prop-types';
//
import counter from './counter';

const ClickCounter = ({ count, increment }) => {
  return <button onClick={increment}>Count (HOC) : {count}</button>;
};

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default counter(ClickCounter);
