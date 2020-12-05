import React, { useContext } from 'react';
import MatAccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
import { MinusIcon, PlusIcon } from './svg';
import { AccordionContext } from './AccordionContext';

const AccordionSummary = ({ children, ...other }) => {
  const { expandIcon, showIcon } = useContext(AccordionContext);

  return (
    <MatAccordionSummary {...other}>
      {showIcon && expandIcon && <MinusIcon />}
      {showIcon && !expandIcon && <PlusIcon />}
      {children}
    </MatAccordionSummary>
  );
};

AccordionSummary.propTypes = {
  children: PropTypes.any,
  expandIcon: PropTypes.bool,
};
export { AccordionSummary };
