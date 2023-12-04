import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
const SelectMedia = () => {

  const [Photography, setphotography] = useState(false);
  const [videography, setvideography] = useState(false);
  const [album, setalbum] = useState(false);
  const [drone, setdrone] = useState(false);
  const [crane, setcrane] = useState(false);
  
  var eventdata = JSON.parse(localStorage.getItem("eventdata"));
    var menus=JSON.parse(localStorage.getItem("menulist"));
    var bookedVenue=JSON.parse(localStorage.getItem("submitVenue"));
    const [name, setname] = useState(eventdata.name);
    const [type, settype] = useState(eventdata.type);
    const [date, setdate] = useState(eventdata.date);
    const [guestCount, setguestCount] = useState(eventdata.guestCount);

  const Selectmedia = () => {
    
    const eventdetails={
      name,
      date,
      type,
      guestCount,
      Photography,
      videography,
      album,
      drone,
      crane,
      bookedVenue,
      menus
    }

    const token=JSON.parse(localStorage.getItem("jwttoken"));
    axios.post(url+"/eventinfo",eventdetails,{headers:{"authorization":`Bearer ${token}`}})
      .then(Response => {
        console.log('Printing event data', Response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (

    <div className="forms-container">
      <div className=' align-items-center'>
        <div className="  py-5 text-white my-5">
          <div colSpan="2" className="fw-bold pt-5 display-6">
            Photo and Film
            <div className="py-6 list-items">
              <div>
                <input type="checkbox" name="photography" id="photography" onChange={() => setphotography(!Photography)} /><label htmlFor="photography">Photography</label>
                <div className="result">
                  Above checkbox is {Photography ? "checked" : "un-checked"}.
                </div>

                <input type="checkbox" name="videography" id="videography" onChange={() => setvideography(!videography)} /><label htmlFor="videography">Videography</label>
                <input type="checkbox" name="album" id="album" onChange={() => setalbum(!album)} /><label htmlFor="album">Album</label>
                <input type="checkbox" name="drone" id="drone" onChange={() => setdrone(!drone)} /><label htmlFor="drone">Drone</label>
                <input type="checkbox" name="crane" id="crane" onChange={() => setcrane(!crane)} /><label htmlFor="crane">Crane</label>
                <button onClick={Selectmedia}>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectMedia;
