import useModal from "./useModal";
import ReactDOM from 'react-dom';
import React from "react";

const Modal = ({isShowing,hide,children,title}) => isShowing?ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay">
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                    <div className="modal-header">
                        <h4>{title}</h4>
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>X</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>,document.body):null;

export default Modal;