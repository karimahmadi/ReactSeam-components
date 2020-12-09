/**
 *
 * Dialog
 *
 */

import React from 'react';
import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { DialogTitle } from './DialogTitle';

function Dialog({
  open,
  onClose,
  onConfirm,
  onCancel,
  title,
  confirm,
  cancel,
  children,
  disableBackdropClick,
  disableEscapeKeyDown,
  fullScreen,
  fullWidth,
  maxWidth,
  onBackdropClick,
  onEnter,
  onEntered,
  onEntering,
  onEscapeKeyDown,
  onExit,
  onExited,
  onExiting,
  PaperComponent,
  PaperProps,
  scroll,
  TransitionComponent,
  transitionDuration,
  TransitionProps,
  dividers,
}) {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onBackdropClick={onBackdropClick}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
      onEscapeKeyDown={onEscapeKeyDown}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
      PaperComponent={PaperComponent}
      PaperProps={PaperProps}
      scroll={scroll}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      TransitionProps={TransitionProps}
      BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.2)' } }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers={dividers}>{children}</DialogContent>
      <DialogActions>
        {confirm && (
          <Box ml={2}>
            <Button variant="contained" color="default" onClick={onConfirm}>
              {confirm}
            </Button>
          </Box>
        )}
        {cancel && (
          <Box>
            <Button variant="contained" color="default" onClick={onCancel}>
              {cancel}
            </Button>
          </Box>
        )}
      </DialogActions>
    </MuiDialog>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  confirm: PropTypes.string,
  cancel: PropTypes.string,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onBackdropClick: PropTypes.func,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  PaperComponent: PropTypes.element,
  PaperProps: PropTypes.object,
  scroll: PropTypes.string,
  TransitionComponent: PropTypes.element,
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  TransitionProps: PropTypes.object,
  dividers: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default Dialog;
