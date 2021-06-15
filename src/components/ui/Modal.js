import classes from './modal.module.css';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
      <button className={classes.btn} onClick={props.onLeftClick}>
        {props.leftButtonText}
      </button>
      <button className={classes.btn} onClick={props.onRightClick}>
        {props.rightButtonText}
      </button>
    </div>
  );
}

export default Modal;
