import React from 'react';
import MatAccordionDetails from '@material-ui/core/AccordionDetails';
import PropTypes from 'prop-types';

const AccordionDetails = ({ children, expandIcon, ...other }) => (
  <MatAccordionDetails {...other}>{children}</MatAccordionDetails>
);

AccordionDetails.propTypes = {
  children: PropTypes.any,
  expandIcon: PropTypes.bool,
};
export { AccordionDetails };
