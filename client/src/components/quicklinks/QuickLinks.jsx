import React from "react";
import { Link } from 'react-router-dom';
import './quicklinks.css'

export default function QuickLinks() {
  return (
    <aside className='quick'>
      <ul className='quick-links'>
        <h4><li>Quick Links</li></h4>
        <Link>
          <li>Mission</li><br></br>
        </Link>
        <Link>
          <li>Impact</li><br></br>
        </Link>
        <Link>
          <li>Adoption Stories</li><br></br>
        </Link>
        <Link>
          <li>Leadership</li><br></br>
        </Link>
        <Link>
          <li>Locations</li><br></br>
        </Link>
      </ul>
    </aside>
  );
}
