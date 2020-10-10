import {useContext} from "react";
import {ModalContext} from "./ModalContext";
import {openError} from "./actions";
import React from "react";

export const withModal = (Component)=>(props)=>{
	const [,dispatch] = useContext(ModalContext);
	return <Component {...props} openError={(children,onClose)=>dispatch(openError(children,onClose))}/>
};
