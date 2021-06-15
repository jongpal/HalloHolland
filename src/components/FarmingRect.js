import classes from './farming-rect.module.css';
import Modal from './ui/Modal';
import Backdrop from './ui/Backdrop';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FarmContext from './../store/farmContext';
import UserContext from './../store/userContext';

function FarmingRect(props) {
  const [showModal, setShowModal] = useState(false);
  const [clickedBox, setClickedBox] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDetail, setModalDetail] = useState('');
  const [farmHost, setFarmHost] = useState('');
  const [isJoin, setIsJoin] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const farmContext = useContext(FarmContext);
  const userContext = useContext(UserContext);

  const history = useHistory();
  let clicked;
  let title;
  let detail;
  let host;

  function detailClickHandler(event) {
    const data = {
      sector: clickedBox,
      host: farmHost,
    };

    history.push(`/detail/${data.sector}`, data);
  }
  function applyClickHandler(event) {
    console.log('clicked', clickedBox);
    const data = {
      sector: clickedBox,
    };
    history.push('/farming-apply', data);
  }
  function joinClickHandler(event) {
    console.log('clicked', clickedBox);
    const data = {
      sector: clickedBox,
    };
    history.push(`/join/${data.sector}`, data);
  }

  function boxOnClickListener(event) {
    // console.log(
    //   event.target.className.split('_')[1].split('__')[0].split('x')[1]
    // );
    console.log(event.target.id);
    clicked = event.target.id.split('-')[1];
    setClickedBox((prevBox) => clicked);
    const currSector = farmContext.sectors[clicked - 1] || null;
    //fetch host Info based on currSector.hostId
    console.log('userList', userContext.allUsers);
    const hostId = currSector.hostId || null;
    const host =
      userContext.allUsers.filter((user) => user.id === hostId)[0] || null;
    console.log(host);
    // currSector.hostId
    const num = currSector.currNum + '/' + currSector.maxNum || null;
    const detailText = `crops : ${currSector.crop}` || null;
    if (host != null) {
      title = `Hostname : ${host.name} (${num})`;

      // detail = `${currSector.crop}` || null;
      detail = detailText;
      // console.log(title, detail);
      // console.log('ocuupied', farmContext.occupiedSector);
      if (farmContext.occupiedSector.some((sector) => sector === clicked - 1)) {
        setIsJoin((prevBool) => false);
        setIsEmpty((prevBool) => false);
        console.log('hi full');
      } else setIsJoin((prevBool) => true);
      if (currSector.currNum === 0) {
        setIsJoin((prevBool) => false);
        setIsEmpty((prevBool) => true);
      }
      setModalTitle((prev) => title);
      setModalDetail((prevDetail) => detail);
      setFarmHost((prevHost) => host);
      // console.log(clickedBox);
      setShowModal(true);
    } else {
      setIsJoin((prevBool) => false);
      setIsEmpty((prevBool) => true);
      setShowModal(true);
    }
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
        <div
          id="sector-1"
          className={classes.box1 + ' ' + classes.open}
          onClick={boxOnClickListener}
        ></div>

        <div
          id="sector-2"
          className={classes.box2}
          onClick={boxOnClickListener}
        ></div>
        <div
          id="sector-3"
          className={classes.box3}
          onClick={boxOnClickListener}
        ></div>
        <div></div>
        <div
          id="sector-4"
          className={classes.box4}
          onClick={boxOnClickListener}
        ></div>
        <div
          id="sector-5"
          className={classes.box5}
          onClick={boxOnClickListener}
        ></div>
        <div
          id="sector-6"
          className={classes.box6}
          onClick={boxOnClickListener}
        ></div>
        <div className={classes.box7} onClick={boxOnClickListener}></div>
        <div
          id="sector-7"
          className={classes.box8}
          onClick={boxOnClickListener}
        ></div>
        <div
          id="sector-8"
          className={classes.box9}
          onClick={boxOnClickListener}
        ></div>
        <div className={classes.box10} onClick={boxOnClickListener}></div>
        {/* <FarmSingleBox number={10} isOpen={true} onClick={boxOnClickListener} /> */}
        <div
          id="sector9"
          className={classes.box11}
          onClick={boxOnClickListener}
        ></div>
        {/* <FarmSingleBox number={11} isOpen={true} onClick={boxOnClickListener} /> */}
        <div className={classes.box12} onClick={boxOnClickListener}></div>
        {/* <FarmSingleBox number={12} isOpen={true} onClick={boxOnClickListener} /> */}
        <div
          id="sector-10"
          className={classes.box13}
          onClick={boxOnClickListener}
        ></div>
        {/* <FarmSingleBox number={13} isOpen={true} onClick={boxOnClickListener} /> */}
        <div className={classes.box14} onClick={boxOnClickListener}></div>
        {/* <FarmSingleBox number={14} isOpen={true} onClick={boxOnClickListener} /> */}
        <div
          id="sector-11"
          className={classes.box15}
          onClick={boxOnClickListener}
        ></div>

        <div
          id="sector-12"
          className={classes.box16}
          onClick={boxOnClickListener}
        ></div>
        {/* <FarmSingleBox number={16} isOpen={true} onClick={boxOnClickListener} /> */}
        <div
          id="sector-13"
          className={classes.box17}
          onClick={boxOnClickListener}
        ></div>
        {/* <FarmSingleBox number={17} isOpen={true} onClick={boxOnClickListener} /> */}
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {isJoin
        ? showModal && (
            <Modal
              title={modalTitle}
              detail={modalDetail}
              leftButtonText="Detail"
              onLeftClick={detailClickHandler}
              onRightClick={joinClickHandler}
              rightButtonText="Join"
            />
          )
        : isEmpty
        ? showModal && (
            <Modal
              title="This sector is Empty"
              detail="Want to Apply ?"
              leftButtonText="cancel"
              onLeftClick={closeModalHandler}
              onRightClick={applyClickHandler}
              rightButtonText="Apply"
            />
          )
        : showModal && (
            <Modal
              title="This sector is Full"
              detail=""
              leftButtonText="cancel"
              onLeftClick={closeModalHandler}
              onRightClick={detailClickHandler}
              rightButtonText="detail"
            />
          )}
    </section>
  );
}

export default FarmingRect;
