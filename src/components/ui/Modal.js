import classes from './modal.module.css';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
      <button onClick={props.onLeftClick}>{props.leftButtonText}</button>
      <button onClick={props.onRightClick}>{props.rightButtonText}</button>
    </div>
  );
}

export default Modal;
