import { styled } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import React from 'react';

const Menu = styled(props => <Box {...props} component="ul" />)(() => ({
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  listStyle: 'none',
  height: '25px',
  padding: '0px 20px 0px 20px',
  zIndex: 100,
  margin: '0px 20px 0px 20px',
  border: '1px solid #1E5BA7',
  backgroundColor: '#306FBD',
  borderRadius: '0px',
  cursor: 'context-menu',
  '&.dropdown_1column': {
    width: '200px',
    // margin: '4px auto',
    height: 'unset',
    float: 'left',
    position: 'absolute',
    right: '-140em' /* Hides the drop down */,
    textAlign: 'left',
    // padding: '10px 5px 10px 5px',
    border: '1px solid #F4F4F4',
    borderTop: 'none',
    background: '#F4F4F4',
    borderRadius: '0px 0px 0px 0px',

    listStyle: 'none',
    padding: '0',
    margin: '0 0 12px 0',

    '& li': {
      fontSize: '12px',
      lineHeight: '24px',
      position: 'relative',
      padding: '0',
      margin: '5px',
      float: 'none',
      textAlign: 'right',
      background: '#F4F4F4',
      '&:hover': {
        background: '#7fcffa',
        border: 'none',
        padding: '0',
        margin: '5px',
      },
    },
  },
}));


export default Menu;
