import React from 'react';
import MatAccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
import {UpIcon , DownIcon} from "./svg";

const AccordionSummary = ({children, id, defaultExpanded, expandIcon, ...other}) => (
	<MatAccordionSummary id={id} {...other}>
		{expandIcon && <UpIcon/> }
		{!expandIcon && <DownIcon/> }
		{children}
	</MatAccordionSummary>
);

AccordionSummary.propTypes = {
	children: PropTypes.any,
	id: PropTypes.string.isRequired,
};
export {AccordionSummary};
