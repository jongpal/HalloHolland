import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import FarmContext from './../../store/farmContext';

function DetailPage(props) {
  const farmContext = useContext(FarmContext);
  const data = props.location.state;
  const host = data.host;
  let { sectorId } = useParams();
  console.log(sectorId);
  // sectorId - 1 , cause index starts from 0, but sectorId, i set it starting 1
  // console.log(farmContext.sectors[sectorId - 1]);
  const currSector = farmContext.sectors[sectorId - 1];
  console.log(host.photo);
  return (
    <div>
      <h1>SECTOR {sectorId} DETAILS</h1>
      <div>
        <div>
          <h2>Looking for..</h2>
        </div>
        <div>
          <h2>Intereted In</h2>
        </div>
        <div>
          <h2>Time free</h2>
        </div>
        <div>
          <h1>Host : {host.name}</h1>
          <div>
            <img src={host.photo} alt="host photo" />
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <button>CONTACT TO HOST</button>
          <button>JOIN</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
