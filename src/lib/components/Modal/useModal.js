import {useContext} from "react";
import {ModalContext} from "./ModalContext";
import {openError} from "./actions";

export const useModal = () => {
	const [,dispatch] = useContext(ModalContext);
	return {
		openError : (children,onClose) => dispatch(openError(children,onClose))
	};
};
