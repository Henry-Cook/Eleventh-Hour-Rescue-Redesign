import React from "react";
import "./locations.css";

export default function Locations() {
  return (
    <div className="locations-container">
      <div className="rockaway">
        <h4 className="locations-name">ROCKAWAY MALL</h4>
        <span className='left'>
          301 Mt Hope Ave
          <br />
          Rockaway, NJ
        </span>
        <br />
        <br/>

        <span className='left'>
          <strong>Mon-Sat</strong> 10am-9:30pm
        </span>

        <span className='left'>
          <strong>Sun</strong> 11am-6pm
        </span>
        <br />
        <br/>
        <span className='left'>
          973-970-0371
           </span>
        <span>
          RockawayMallEHR@gmail.com
        </span>
      </div>

      <div className="EHRKennels">
        <h4 className="locations-name">
          EHR KENNELS
        </h4>
        <span className='appt'>
        (By appointment only.
          <br />
          Not open to the public.)
        </span>
        <span className='left'>
          861 Rt 10 East
          <br />
          Randolph,NJ
        </span>
        <br />
        <br />

        <span className='left'>973-664-0865</span>
        <span className='left'>
          <strong>(voicemail only)</strong>
        </span>
        <span className='left'>MainOffice@EHRdogs.org</span>
      </div>

      <div className="kearney">
        <h4 className="locations-name">KEARNEY PETSMART</h4>
        <span className='left'>
          160 Passaic Ave.
          <br />
          Kearny, NJ
        </span>
        <br />
        <br />
        <span className='left'>
          <strong>Mon-Sat</strong> 9am-9pm
        </span>
        <span className='left'>
          <strong>Sun</strong> 10am-7pm
        </span>
        <p>
          <strong>No direct phone</strong>
        </p>
      </div>

      <div className="roxbury">
        <h4 className="locations-name">ROXBURY MALL</h4>
        <span className='left'>
          275 Rt 10 East
          <br />
          Succasunna,NJ
        </span>
        <br />
        <br/>
        <span className='left'>
          <strong>Sat</strong>11am-4pm
        </span>
        <span className='left'>
          <strong>Sun</strong> 11am-4pm
        </span>
        <p>
          <strong>No direct phone</strong>
        </p>
      </div>
    </div>
  );
}
