import PropTypes from 'prop-types';
import { Title } from './Title';
const XAxis = () => null;

XAxis.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.objectOf(Title),
  type: PropTypes.string,
};

export { XAxis };
