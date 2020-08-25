import React from "react";
import './quicklinks.css'

export default function QuickLinks() {
  return (
    <aside className='quick'>
      <ul className='quick-links'>
        <h4><li>Quick Links</li></h4>
        <a href='#mission'>
          <li>Mission</li><br></br>
        </a>
        <a href='#impact'>
          <li>Impact</li><br></br>
        </a>
        <a href='#stories'>
          <li>Adoption Stories</li><br></br>
        </a>
        <a href='#leadership'>
          <li>Leadership</li><br></br>
        </a>
        <a href='#locations'>
          <li>Locations</li><br></br>
        </a>
      </ul>
    </aside>
  );
}
