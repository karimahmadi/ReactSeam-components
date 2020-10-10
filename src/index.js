import React from 'react';
import { render } from "react-dom";
import {ModalProvider,useModal} from "./lib/components/Modal";

const App = () => {
const {openError} = useModal();
	return (
		<button onClick={() => openError("error from useModal HOOK",()=>console.log('modal closed'))}>test modal component</button>
	);
};

render(
	<ModalProvider>
		<App />
	</ModalProvider>
		, document.getElementById("root"));
