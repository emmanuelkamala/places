import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = props => {
  const content = (
    <div className="modal">
      
    </div>
  )
  return ReactDOM.createPortal(content, getElementById('modal-hook'))
}

const Modal = (props) => {
  return (
    <div>
      
    </div>
  )
}

export default Modal;
