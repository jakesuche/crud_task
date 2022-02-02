import React, { useEffect, useRef } from "react";
// import Button from '../button/Button';
// import CloseIcon from '../CloseIcon';
import styles from "./styles.module.css";
import Button from '../../atoms/Button'

const Modal = ({ modalStyle, children, show, onClose, backdropStyle ,deleteUser}) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${styles.modal__wrap}`}
      >
        
        <div style={modalStyle} className={styles.modal}>
        <div className="modal-header">
        <h5 className="modal-title">Delete</h5>
        <Button  onClick={onClose} type="button" className="close btn" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </Button>
      </div>
          {children}
          <div className="modal-footer">
            <Button onClick={onClose}  type="button" className="btn btn-secondary px-4">
              Cancel
            </Button>
            <Button onClick={deleteUser}
              type="button"
              className="btn btn-danger px-4"
              
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
