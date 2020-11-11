import React from 'react';
import MatAccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';

const AccordionSummary = ({ children, id, ...other }) => (
  <MatAccordionSummary id={id} {...other}>
    {children}
  </MatAccordionSummary>
);

AccordionSummary.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};
export { AccordionSummary };
