module.exports = () =>
  `/**
   *
   * Asynchronously loads the component for {{ properCase name }}
   *
   */

  import loadable from 'utils/loadable';

  export default loadable(() => import('./index'));
  `;
