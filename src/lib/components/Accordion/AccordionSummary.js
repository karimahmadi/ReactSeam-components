import React from 'react';
import MatAccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
import { MinusIcon, PlusIcon } from './svg';

const AccordionSummary = ({ children, expandIcon, ...other }) => (
  <MatAccordionSummary {...other}>
    {expandIcon && <MinusIcon />}
    {!expandIcon && <PlusIcon />}
    {children}
  </MatAccordionSummary>
);

AccordionSummary.propTypes = {
  children: PropTypes.any,
  expandIcon: PropTypes.bool,
};
export { AccordionSummary };
