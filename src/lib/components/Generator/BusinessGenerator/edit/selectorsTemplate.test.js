module.exports = () =>
  `// import { select{{ properCase crudModulePrefix }}EditDomain } from '../selectors';

describe('select{{ properCase crudModulePrefix }}EditDomain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
`;
