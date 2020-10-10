/**
 *
 * ChangeFocus
 *
 */

import React, { useEffect, Fragment, useState, useContext } from 'react';
import { ComponentContext } from '../index';

// import styled from 'styled-components';

const ChangeFocus = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ComponentContext);
  const [refList, setRefList] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(-1);
  useEffect(() => {
    document.addEventListener('keydown', enterKeyPressHandler);
    return () => {
      document.removeEventListener('keydown', enterKeyPressHandler);
    };
  }, [refList, currentIndex]);
  useEffect(() => {
    setRefList(state.ref);
  }, [state.ref, refList]);
  useEffect(() => {
    if (state.focused) {
      setCurrentIndex(0);
      refList.forEach((ref, index) => {
        if (ref.current === state.focused) {
          let targetIndex = 0;
          if (index < refList.length) targetIndex = index;
          setCurrentIndex(targetIndex);
        }
      });
    }
  }, [state.focused, refList]);
  const enterKeyPressHandler = e => {
    let localIndex = currentIndex;
    if (!e.ctrlKey && e.key === 'Enter') {
      /**
       * if current element is text and next element is button, direction: forward
       */
      if (
        refList[localIndex] &&
        refList[localIndex].current.type === 'text' &&
        refList[localIndex + 1] &&
        refList[localIndex + 1].current.type === 'button'
      ) {
        refList[localIndex + 1].current.focus();
        setCurrentIndex(localIndex + 1);
        return;
      }
      /**
       * if current element is button and next element is button, direction: forward
       */
      if (
        refList[localIndex] &&
        refList[localIndex].current.type === 'button' &&
        refList[localIndex + 1] &&
        refList[localIndex + 1].current.type === 'button'
      ) {
        return;
      }
      /**
       * if reach to bondery components list, direction: forward
       */
      if (refList.length - 1 > localIndex) {
        localIndex += 1;
      } else {
        if (
          refList[localIndex] &&
          refList[localIndex].current.type === 'button' &&
          refList[0] &&
          refList[0].current.type === 'text'
        ) {
          refList[localIndex].click();
        }
        localIndex = 0;
      }
      refList[localIndex].current.focus();
      setCurrentIndex(localIndex);
    } else if (e.ctrlKey && e.key === 'Enter') {
      /**
       * if current element is button and previous element is button, direction: backward
       */
      if (
        refList[localIndex] &&
        refList[localIndex].current.type === 'button' &&
        refList[localIndex - 1] &&
        refList[localIndex - 1].current.type === 'button'
      ) {
        return;
      }
      /**
       * if reach to bondery components list, direction: backward
       */
      if (localIndex === 0) {
        localIndex = refList.length - 1;
      } else {
        localIndex -= 1;
      }
      refList[localIndex].current.focus();
      setCurrentIndex(localIndex);
    }
  };
  return <Fragment />;
};

ChangeFocus.propTypes = {};

export { ChangeFocus };
