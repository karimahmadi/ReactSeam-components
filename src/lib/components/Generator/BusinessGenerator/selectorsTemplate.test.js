module.exports = () =>
  `// import { select{{ properCase moduleName }}Domain } from '../selectors';

describe('select{{ properCase moduleName }}Domain', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
`;
