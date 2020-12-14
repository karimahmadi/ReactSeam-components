/**
 *
 * Asynchronously loads the component for Charts
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), () => <LoadingIndicator />);
