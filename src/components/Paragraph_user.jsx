import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ render }) => {
  return render('has_info');
};

Paragraph.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Paragraph;
