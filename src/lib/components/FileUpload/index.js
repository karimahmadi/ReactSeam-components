/**
 *
 * FileUpload
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileReaderInput from 'react-file-reader-input';
import SvgIcon from '@material-ui/core/SvgIcon';
import { UploadButton } from './UploadButton';
import { UploadButtoTitle } from './UploadButtonTitle';
import { UploadContainer } from './UploadContainer';
import { UploadInput } from './UploadInput';

function FileUpload({
  onChange,
  type = 'binary',
  title,
  ratio = '1:100',
  ltr,
  showInput,
  name,
}) {
  const [fileName, setFileName] = useState('');
  const handleChange = (e, results) => {
    results.forEach(result => {
      const [event, file] = result;
      setFileName(file.name);
      if (onChange) {
        onChange({ target: { value: event.target.result, name }, event, file });
      }
    });
  };

  const handleUploadButtonClick = () => {
    setFileName('');
    if (onChange) {
      onChange({ target: { value: null, name } });
    }
  };

  const getRatio = (rat, index) => {
    const rates = rat.split(':').map(Number);
    return (rates[index] * 100) / (rates[0] + rates[1]);
  };

  return (
    <FileReaderInput as={type} onChange={handleChange}>
      <UploadContainer ltr={showInput && ltr}>
        {showInput && (
          <UploadInput
            disabled
            ratio={getRatio(ratio, 1)}
            onClick={e => e.stopPropagation()}
            value={fileName}
          />
        )}
        <UploadButton
          variant="outlined"
          ratio={title && getRatio(ratio, 0)}
          onClick={handleUploadButtonClick}
        >
          <SvgIcon viewBox="0 0 100 100">
            <path
              d="M69.271,42.085c-5.941-7.138-11.883-14.276-17.824-21.414C51.01,20.147,50.496,19.956,50,19.99
	c-0.496-0.034-1.011,0.157-1.447,0.681c-5.941,7.137-11.883,14.276-17.824,21.414c-1.1,1.319-0.461,3.494,1.446,3.494
	c2.494,0,4.986,0,7.479,0c0,10.795,0,21.59,0,32.386c0,1.116,0.931,2.047,2.047,2.047c5.531,0,11.064,0,16.598,0
	c1.116,0,2.047-0.931,2.047-2.047c0-10.796,0-21.591,0-32.386c2.493,0,4.985,0,7.479,0C69.732,45.579,70.371,43.404,69.271,42.085z"
            />
            <path
              d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M50,92C26.804,92,8,73.195,8,50
	C8,26.804,26.804,8,50,8c23.195,0,42,18.804,42,42C92,73.195,73.195,92,50,92z"
            />
          </SvgIcon>
          {title && <UploadButtoTitle>{title}</UploadButtoTitle>}
        </UploadButton>
      </UploadContainer>
    </FileReaderInput>
  );
}

FileUpload.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  ratio: PropTypes.string,
  ltr: PropTypes.bool,
  showInput: PropTypes.bool,
  name: PropTypes.string,
};

export default FileUpload;
