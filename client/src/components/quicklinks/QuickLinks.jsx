import React from "react";
import { Link } from 'react-router-dom';

export default function QuickLinks() {
  return (
    <div className='quick'>
      <p>Quick Links</p>
      <ul>
        <Link>
          <li>Mission</li>
        </Link>
        <Link>
          <li>Impact</li>
        </Link>
        <Link>
          <li>Adoption Stories</li>
        </Link>
        <Link>
          <li>Leadership</li>
        </Link>
        <Link>
          <li>Locations</li>
        </Link>
      </ul>
    </div>
  );
}
