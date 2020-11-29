import React from 'react';
import Box from '@material-ui/core/Box/Box';
import './style.css';
import ImgSrc from './new-logo.png';
import { Logo } from './Logo';
import { Loading } from './Loading';
import { LoadingImage } from './LoadingImage';
import { Toggle } from './Toggle';
import { LoadingLabel } from './LoadingLabel';

const TejaratLoading = () => (
  <Loading>
    <LoadingImage>
      <Toggle />
      <Logo src={ImgSrc} />
      <Box>
        <LoadingLabel>در حال بارگذاری ... لطفا منتظر بمانید</LoadingLabel>
      </Box>
    </LoadingImage>
  </Loading>
);

export default TejaratLoading;
