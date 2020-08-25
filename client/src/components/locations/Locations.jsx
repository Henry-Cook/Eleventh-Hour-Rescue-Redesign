import React from "react";
import "./locations.css";

export default function Locations() {
  return (
    <div className="locations-container">
      <div className="rockaway">
        <h4 className="locations-name">ROCKAWAY MALL</h4>
        <p>
          301 Mt Hope Ave
          <br />
          Rockaway, NJ
        </p>

          <span><strong>Mon-Sat</strong> 10am-9:30pm</span>
          <br /><br/>
          <span><strong>Sun</strong> 11am-6pm</span>

        <p>
          973-970-0371
          <br />
          RockawayMallEHR@gmail.com
        </p>
      </div>

      <div className="EHRKennels">
        <h4 className="locations-name">
          EHR KENNELS <br />
          (By appointment only.
          <br />
          Not open to the public.)
        </h4>
        <p>
          861 Rt 10 East
          <br />
          Randolph,NJ
        </p>
        <p>
          973-664-0865
          <br />
          <strong>(voicemail only)</strong>
          <br />
          MainOffice@EHRdogs.org
        </p>
      </div>

      <div className="kearney">
        <h4 className="locations-name">KEARNEY PETSMART</h4>
        <p>
          160 Passaic Ave.
          <br />
          Kearny, NJ
        </p>
          <span><strong>Mon-Sat</strong> 9am-9pm</span>
          <br />
          <span><strong>Sun</strong> 10am-7pm</span>
        <p><strong>No direct phone</strong></p>
      </div>

      <div className="roxbury">
        <h4 className="locations-name">ROXBURY MALL</h4>
        <p>
          275 Rt 10 East
          <br />
          Succasunna,NJ
        </p>
          <span><strong>Sat</strong>11am-4pm</span>
          <br />
          <span><strong>Sun</strong> 11am-4pm</span>
        <p><strong>No direct phone</strong></p>
      </div>
    </div>
  );
}
