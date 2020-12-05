/**
 *
 * Accordion
 *
 */

import React, { useState } from 'react';
import MatAccordion from '@material-ui/core/Accordion';
import PropTypes from 'prop-types';
import { AccordionContext } from './AccordionContext';

function Accordion({
  children,
  defaultExpanded,
  showIcon = true,
  onChange,
  ...other
}) {
  const [expandIcon, setExpandIcon] = useState(
    other.expanded || defaultExpanded,
  );
  const handleOnChange = (e, expanded) => {
    setExpandIcon(expanded);
    if (onChange) onChange(e, expanded);
  };

  return (
    <AccordionContext.Provider value={{ expandIcon, showIcon }}>
      <MatAccordion
        {...other}
        defaultExpanded={defaultExpanded}
        onChange={handleOnChange}
      >
        {children}
      </MatAccordion>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = {
  children: PropTypes.any,
  defaultExpanded: PropTypes.bool,
  showIcon: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Accordion;
