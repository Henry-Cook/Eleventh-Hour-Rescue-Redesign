import React, { useState } from "react";
import "./quicklinks.css";

export default function QuickLinks() {
  const [defaultLink, updateDefaultLink] = useState("mission");

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
          id ='mission-link'>
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
          id='impact-link'>
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
            } id='adoption-stories'
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
            id='leadership'
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
            id='locations'
          >
            Locations
          </li>
        </a>
      </ul>
    </aside>
  );
}
