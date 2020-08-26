import React, { useState } from "react";
import "./quicklinks.css";

export default function QuickLinks() {
  const [missionLinkColor, updateMissionLinkColor] = useState("");
  const [impactLinkColor, updateImpactLinkColor] = useState("");
  const [storiesLinkColor, updateStoriesLinkColor] = useState("");
  const [leadershipLinkColor, updateLeadershipLinkColor] = useState("");
  const [locationsLinkColor, updateLocationsLinkColor] = useState("");

  const linkColor = (currentLinkColor) => {
    return currentLinkColor !== "clicked" ? "clicked" : "";
  };
  const handleClick = (e) => {
    updateMissionLinkColor(linkColor(e))
    updateImpactLinkColor('')
    updateStoriesLinkColor('');
    updateLeadershipLinkColor('');
    updateLocationsLinkColor('');
  };
  const handleImpactClick = (e) => {
    updateImpactLinkColor(linkColor(e));
    updateMissionLinkColor('')
    updateStoriesLinkColor('');
    updateLeadershipLinkColor('');
    updateLocationsLinkColor('');
  };

  const handleStoriesClick = (e) => {
    updateStoriesLinkColor(linkColor(e))
    updateMissionLinkColor('')
    updateImpactLinkColor('');
    updateLeadershipLinkColor('');
    updateLocationsLinkColor('');

  }

  const handleLeadershipClick = (e) => {
    updateLeadershipLinkColor(linkColor(e));
    updateMissionLinkColor('')
    updateImpactLinkColor('');
    updateStoriesLinkColor('');
    updateLocationsLinkColor('');
  }

  const handleLocationsClick = (e) => {
    updateLocationsLinkColor(linkColor(e));
    updateMissionLinkColor('')
    updateImpactLinkColor('');
    updateStoriesLinkColor('');
    updateLeadershipLinkColor('');
  }
  return (
    <aside className="quick">
      <ul className="quick-links">
        <h4>
          <li>Quick Links</li>
        </h4>
        <a href="#mission" className={missionLinkColor} onClick={ () => {handleClick(missionLinkColor)}}>
          <li>Mission</li>
          <br></br>
        </a>
        <a href="#impact" className={impactLinkColor} onClick={() => {handleImpactClick (impactLinkColor)}}>
          <li>Impact</li>
          <br></br>
        </a>
        <a href="#stories" className={storiesLinkColor} onClick={() => { handleStoriesClick(storiesLinkColor) }}>
          <li>Adoption Stories</li>
          <br></br>
        </a>
        <a
          href="#leadership"
          className={leadershipLinkColor}
          onClick={() => {handleLeadershipClick(leadershipLinkColor)}}
        >
          <li>Leadership</li>
          <br></br>
        </a>
        <a href="#locations" className={locationsLinkColor} onClick={() => { handleLocationsClick(locationsLinkColor)}}>
          <li>Locations</li>
          <br></br>
        </a>
      </ul>
    </aside>
  );
}
