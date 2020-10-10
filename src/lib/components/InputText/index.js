import InputText from './inputText';
import withChangeFocus from '../Group/withChangeFocus';
const InputTextWithChangeFocus = props => withChangeFocus(InputText)(props);
export { InputTextWithChangeFocus };
export default InputText;
