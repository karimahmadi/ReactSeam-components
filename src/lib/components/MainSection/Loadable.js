/**
 *
 * Asynchronously loads the component for MainSection
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
