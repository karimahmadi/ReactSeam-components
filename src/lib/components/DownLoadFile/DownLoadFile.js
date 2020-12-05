/**
 *
 * DownLoadFile
 *
 */

import React from 'react';
import * as axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from '../Button';

function DownLoadFile({
  children,
  download,
  method = 'GET',
  responseType = 'blob',
  authorization,
  fileType = 'application/pdf',
  fileName = 'file.pdf',
  url,
  isValid = () => true,
  onError,
  ...other
}) {
  const downLoadFile = () => {
    if (isValid()) {
      axios({
        url,
        method,
        responseType, // 'blob'(Browser Only), 'arraybuffer', 'text', 'document', 'json'(Default), 'stream'
        headers: {
          common: {
            Authorization: authorization, // `Bearer ${localStorage.getItem('Auth-Token')}`,
          },
        },
      })
        .then(response => {
          if (response.status === 200) {
            if (download) {
              const href = window.URL.createObjectURL(
                new Blob([response.data]),
              );
              const link = document.createElement('a');
              link.href = href;
              link.setAttribute('download', fileName);
              document.body.appendChild(link);
              link.click();
            } else {
              // Create a Blob from the PDF Stream
              const file = new Blob([response.data], { type: fileType });
              // Build a URL from the file
              const fileURL = URL.createObjectURL(file);
              // Open the URL on new Window
              const pdfWindow = window.open();
              pdfWindow.location.href = fileURL;
            }
          } else if (onError) {
            onError(response);
          }
        })
        .catch(err => {
          if (onError) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
              onError({
                ...err,
                response: { ...err.response, data: fileReader.result },
              });
            };
            fileReader.readAsText(err.response.data);
          }
        });
    }
  };

  return (
    <Button onClick={downLoadFile} {...other}>
      {children}
    </Button>
  );
}

DownLoadFile.propTypes = {
  children: PropTypes.node,
  download: PropTypes.bool,
  method: PropTypes.string,
  responseType: PropTypes.string,
  authorization: PropTypes.string,
  fileType: PropTypes.string,
  fileName: PropTypes.string,
  url: PropTypes.string,
  isValid: PropTypes.func,
  onError: PropTypes.func,
};

export default DownLoadFile;
