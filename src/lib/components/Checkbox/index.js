import Checkbox from './Checkbox';
import withChangeFocus from '../Group/withChangeFocus';
const CheckboxWithChangeFocus = props => withChangeFocus(Checkbox)(props);
export { CheckboxWithChangeFocus };
export default Checkbox;
