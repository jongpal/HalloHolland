import classes from './farming-rect.module.css';
import Modal from './ui/Modal';
import Backdrop from './ui/Backdrop';
import { useState } from 'react';

function FarmingRect(props) {
  const [showModal, setShowModal] = useState(false);

  function boxOnClickListener(event) {
    console.log(
      event.target.className.split('_')[1].split('__')[0].split('x')[1]
    );
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <section className={classes.farmsummary}>
      <div id="1-box" className={classes.r_one}>
        <p>Occupied</p>
      </div>

      <div className={classes.r_two}>
        <p>Open</p>
      </div>

      <div className={classes.rectangle}>
        <div className={classes.box1} onClick={boxOnClickListener}></div>
        <div className={classes.box2} onClick={boxOnClickListener}></div>
        <div className={classes.box3} onClick={boxOnClickListener}></div>
        <div></div>
        <div className={classes.box4} onClick={boxOnClickListener}></div>
        <div className={classes.box5} onClick={boxOnClickListener}></div>
        <div className={classes.box6} onClick={boxOnClickListener}></div>
        <div className={classes.box7} onClick={boxOnClickListener}></div>
        <div className={classes.box8} onClick={boxOnClickListener}></div>
        <div className={classes.box9} onClick={boxOnClickListener}></div>
        <div className={classes.box10} onClick={boxOnClickListener}></div>
        <div className={classes.box11} onClick={boxOnClickListener}></div>
        <div className={classes.box12} onClick={boxOnClickListener}></div>
        <div className={classes.box13} onClick={boxOnClickListener}></div>
        <div className={classes.box14} onClick={boxOnClickListener}></div>
        <div className={classes.box15} onClick={boxOnClickListener}></div>
        <div className={classes.box16} onClick={boxOnClickListener}></div>
        <div className={classes.box17} onClick={boxOnClickListener}></div>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <Modal
          text="Current state"
          leftButtonText="Detail"
          rightButtonText="Join"
        />
      )}
    </section>
  );
}

export default FarmingRect;
