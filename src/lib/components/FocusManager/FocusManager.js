import React, { useEffect, useReducer } from 'react';
import PropsType from 'prop-types';
import { reducer, initalState } from './reducer';
import { ALL_CONSTANT } from './constants';
import { FocusManagerContext } from './FocusManagerContext';

const FocusManager = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    if (state.ref.length > 0) {
      document.addEventListener('keydown', enterKeyPressHandler);
    }
    return () => {
      document.removeEventListener('keydown', enterKeyPressHandler);
    };
  }, [state.ref]);

  function compare(a, b) {
    if (a.tabindex < b.tabindex) {
      return -1;
    }
    if (a.tabindex > b.tabindex) {
      return 1;
    }
    return 0;
  }

  const findCurrentIndex = () => {
    state.refEx.sort(compare);
    return state.refEx.findIndex(
      item => item.ref.current === document.activeElement,
    );
  };

  const findNextIndex = currentIndex => {
    for (let index = currentIndex + 1; index < state.refEx.length; index += 1) {
      const { skip, disabled } = state.refEx[index];
      if (!skip && !disabled) return index;
    }
    return -1;
  };

  const findPreviousIndex = currentIndex => {
    for (let index = currentIndex - 1; index >= 0; index -= 1) {
      const { skip, disabled } = state.refEx[index];
      if (!skip && !disabled) return index;
    }
    return -1;
  };

  const setFocusOnIndex = index => {
    if (index >= 0 && index < state.refEx.length)
      if (
        state.refEx[index] &&
        state.refEx[index].ref &&
        state.refEx[index].ref.current
      )
        state.refEx[index].ref.current.focus();
  };

  const isNotButtonType = index =>
    state.refEx[index].ref.current.type !== 'button';

  const isNotTextType = index => state.refEx[index].ref.current.type !== 'text';

  const enterKeyPressHandler = e => {
    let localIndex = findCurrentIndex();

    /* activeElement is not in the scope of this groupProvider so ignore the key press */
    if (localIndex === -1) return;

    /* activeElement not button  */
    const notButton = isNotButtonType(localIndex);
    const notText = isNotTextType(localIndex);

    if (
      (!e.ctrlKey && e.key === 'Enter' && notButton) ||
      (e.key === 'ArrowLeft' && notText)
    ) {
      localIndex = findNextIndex(localIndex);
    } else if (
      (e.ctrlKey && e.key === 'Enter' && notButton) ||
      (e.key === 'ArrowRight' && notText)
    ) {
      localIndex = findPreviousIndex(localIndex);
    }
    setFocusOnIndex(localIndex);
  };

  return (
    <FocusManagerContext.Provider value={[dispatch, ALL_CONSTANT]}>
      {children}
    </FocusManagerContext.Provider>
  );
};

FocusManager.propTypes = {
  children: PropsType.node,
};

export default FocusManager;
