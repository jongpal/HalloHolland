import classes from './modal.module.css';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <p>{props.text}</p>
      <button>{props.leftButtonText}</button>
      <button>{props.rightButtonText}</button>
    </div>
  );
}

export default Modal;
