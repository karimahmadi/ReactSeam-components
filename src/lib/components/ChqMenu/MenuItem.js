import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import React from 'react';

const MenuItem = styled(props => <Box {...props} component="li" />)(() => ({
  float: 'right',
  display: 'block',
  textAlign: 'center',
  position: 'relative',
  marginRight: '10px',
  borderRadius: '4px',
  paddingRight: '2px',
  cursor: 'context-menu',

  fontFamily:
    '"B Yekan", "yekan", "B Nazanin", "Nazanin", Arial, Helvetica, sans-serif',
  lineHeight: '21px',
  fontSize: '14px',
  // textAlign: 'left',
  // background: '#F4F4F4',

  '&:hover': {
    background: '#F4F4F4',
    borderRadius: '0px 0px 0px 0px',
    '& a': {
      color: '#161616',
    },
    '& .dropdown_1column': {
      right: '-1px',
      top: 'auto',
      marginRight: '1px',
    },
  },
  '& a': {
    fontFamily:
      '"B Yekan", "yekan", "B Nazanin", "Nazanin", Arial, Helvetica, sans-serif',
    fontSize: '14px',
    color: '#C2EBFB',
    display: 'block',
    outline: '0',
    textDecoration: 'none',
    paddingBottom: '4px',
    paddingLeft: '5px',
  },
}));

export default MenuItem;
