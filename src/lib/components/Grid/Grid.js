import { styled } from '@material-ui/core';
import MuiGrid from '@material-ui/core/Grid/Grid';
import React from 'react';

const Grid = styled(({ left, item, ...other }) => (
  <MuiGrid item={item} {...other} />
))({
  textAlign: props => (props.left ? 'left' : 'right'),
  padding: '1px 0',
});

export default Grid;
