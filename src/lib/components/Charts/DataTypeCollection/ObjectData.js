import PropTypes from 'prop-types';
const ObjectData = () => null;

ObjectData.propTypes = {
  name: PropTypes.string.isRequired,
  y: PropTypes.number.isRequired,
  sliced: PropTypes.bool,
  selected: PropTypes.bool,
};

export { ObjectData };
