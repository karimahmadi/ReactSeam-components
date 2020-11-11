import React from 'react';
import MatAccordionDetails from '@material-ui/core/AccordionDetails';
import PropTypes from 'prop-types';

const AccordionDetails = ({ children, ...other }) => (
  <MatAccordionDetails {...other}>{children}</MatAccordionDetails>
);

AccordionDetails.propTypes = {
  children: PropTypes.any,
};
export { AccordionDetails };
