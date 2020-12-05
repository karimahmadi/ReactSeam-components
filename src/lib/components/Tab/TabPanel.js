/**
 *
 * TabPanel
 *
 */

import React, { Suspense, lazy, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const TabPanel = ({
  children,
  value,
  index,
  isLazy,
  importedComponent,
  lazyCompProps,
  dontCache,
  loadingIndicator,
}) => {
  const [result, setResult] = useState(null);
  const [cache, setCache] = useState(null);

  useEffect(() => {
    setResult(children);
  }, [children]);

  useEffect(() => {
    let LazyComponent;
    if (isLazy && value === index) {
      if (cache && !dontCache) {
        LazyComponent = cache;
      } else {
        LazyComponent = lazy(importedComponent);
        setCache(LazyComponent);
      }
      setResult(
        <Suspense fallback={<Fragment>{loadingIndicator}</Fragment>}>
          <LazyComponent {...lazyCompProps} />
        </Suspense>,
      );
    }
  }, [value]);

  return (
    <div role="tabpanel" hidden={value !== index}>
      {result}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any,
  isLazy: PropTypes.bool,
  dontCache: PropTypes.bool,
  lazyCompProps: PropTypes.object,
  importedComponent: PropTypes.any,
  value: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  loadingIndicator: PropTypes.any,
};

export { TabPanel };
