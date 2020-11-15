import React from 'react';
import { styled } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

/* Minus Icon */
const MinusIconBase = props => (
  <SvgIcon width="16" height="16" viewBox="0 0 512 512" {...props}>
    <path d="M384,265h-17V265H128v-17h119h17h120V265z" />
  </SvgIcon>
);
export const MinusIcon = styled(MinusIconBase)(() => ({
  margin: 'auto 8px',
}));

/* Plus Icon */
const PlusIconBase = props => (
  <SvgIcon width="16" height="16" viewBox="0 0 512 512" {...props}>
    <path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z" />
  </SvgIcon>
);
export const PlusIcon = styled(PlusIconBase)(() => ({
  margin: 'auto 8px',
}));
