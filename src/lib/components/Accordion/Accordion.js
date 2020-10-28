/**
 *
 * Accordion
 *
 */

import React from 'react';
import MatAccordion from '@material-ui/core/Accordion';
import PropTypes from 'prop-types';

function Accordion({ children, ...other }) {
  return <MatAccordion {...other}>{children}</MatAccordion>;
}

Accordion.propTypes = {
  children: PropTypes.any,
};

export default Accordion;
