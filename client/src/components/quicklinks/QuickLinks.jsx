import React, { useState } from "react";
import "./quicklinks.css";

export default function QuickLinks() {
  const [defaultLink, updateDefaultLink] = useState("mission");
  // const [missionLinkColor, updateMissionLinkColor] = useState("");
  // const [impactLinkColor, updateImpactLinkColor] = useState("");
  // const [storiesLinkColor, updateStoriesLinkColor] = useState("");
  // const [leadershipLinkColor, updateLeadershipLinkColor] = useState("");
  // const [locationsLinkColor, updateLocationsLinkColor] = useState("");

  // const linkColor = (currentLinkColor) => {
  //   return currentLinkColor !== "clicked" ? "clicked" : "";
  // };

  // const handleClick = (e) => {
  //   updateMissionLinkColor(linkColor(e));
  //   updateImpactLinkColor("");
  //   updateStoriesLinkColor("");
  //   updateLeadershipLinkColor("");
  //   updateLocationsLinkColor("");
  // };
  // const handleImpactClick = (e) => {
  //   updateImpactLinkColor(linkColor(e));
  //   updateMissionLinkColor("");
  //   updateStoriesLinkColor("");
  //   updateLeadershipLinkColor("");
  //   updateLocationsLinkColor("");
  // };

  // const handleStoriesClick = (e) => {
  //   updateStoriesLinkColor(linkColor(e));
  //   updateMissionLinkColor("");
  //   updateImpactLinkColor("");
  //   updateLeadershipLinkColor("");
  //   updateLocationsLinkColor("");
  // };

  // const handleLeadershipClick = (e) => {
  //   updateLeadershipLinkColor(linkColor(e));
  //   updateMissionLinkColor("");
  //   updateImpactLinkColor("");
  //   updateStoriesLinkColor("");
  //   updateLocationsLinkColor("");
  // };

  // const handleLocationsClick = (e) => {
  //   updateLocationsLinkColor(linkColor(e));
  //   updateMissionLinkColor("");
  //   updateImpactLinkColor("");
  //   updateStoriesLinkColor("");
  //   updateLeadershipLinkColor("");
  // };
  return (
    <aside className="quick">
      <ul className="quick-links">
        <h4>
          <li>Quick Links</li>
        </h4>
        <a
          href="#mission"
          onClick={(e) => {
            updateDefaultLink("mission");
          }}
        >
          <li
            className={
              defaultLink === "mission" ? "quick-links-clicked" : "default-link"
            }
          >
            Mission
          </li>
        </a>
        <a
          href="#impact"
          onClick={() => {
            updateDefaultLink("impact");
          }}
        >
          <li
            className={
              defaultLink === "impact" ? "quick-links-clicked" : "default-link"
            }
          >
            Impact
          </li>
        </a>
        <a
          href="#stories"
          onClick={() => {
            updateDefaultLink("stories");
          }}
        >
          <li
            className={
              defaultLink === "stories" ? "quick-links-clicked" : "default-link"
            }
          >
            Adoption Stories
          </li>
        </a>
        <a
          href="#leadership"
          onClick={() => {
            updateDefaultLink("leadership");
          }}
        >
          <li
            className={
              defaultLink === "leadership"
                ? "quick-links-clicked"
                : "default-link"
            }
          >
            Leadership
          </li>
        </a>
        <a
          href="#locations"
          onClick={() => {
            updateDefaultLink("locations");
          }}
        >
          <li
            className={
              defaultLink === "locations"
                ? "quick-links-clicked"
                : "default-link"
            }
          >
            Locations
          </li>
        </a>
      </ul>
    </aside>
  );
}
