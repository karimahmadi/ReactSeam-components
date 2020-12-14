/**
 *
 * Checkbox
 *
 */

import React, {useRef, useEffect, Fragment} from 'react';
import MatCheckbox from '@material-ui/core/Checkbox';
import MuiCheskStyle from './MuiChkStyle';
import PropTypes from 'prop-types';

function Checkbox({skip, dispatch, ADD_TO_REF_LIST, tabindex, ...others}) {
	const checkboxRef = useRef(null);
	const {disabled} = others;
	useEffect(() => {
		if (dispatch)
			dispatch({
				type: ADD_TO_REF_LIST,
				payload: checkboxRef,
				skip,
				tabindex,
				disabled,
			});
	}, [checkboxRef, skip, tabindex, disabled]);

	return (
		<Fragment>
			<MatCheckbox {...others} inputRef={checkboxRef}/>
			<MuiCheskStyle/>
		</Fragment>
	);
}

Checkbox.propTypes = {
	tabindex: PropTypes.number,
	skip: PropTypes.bool,
	dispatch: PropTypes.func,
	ADD_TO_REF_LIST: PropTypes.any,
};

export default Checkbox;
