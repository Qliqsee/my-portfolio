import './Slider.scss';
import { GitHub, Twitter, LinkedIn } from '@material-ui/icons';

import React from 'react';

export default function Slider({ menuOpen, setMenuOPen }) {
  return (
    <div className={`${menuOpen ? 'slider active ' : 'slider'}`}>
      <ul className='navigation'>
        <li>Home</li>
        <li>Work</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      <div className='social'>
        <span className='text'>Connect with me</span>
        <div className='icons'>
          <span className='github'>
            <GitHub />
          </span>
          <span className='twitter'>
            <Twitter />
          </span>
          <span className='linkedin'>
            <LinkedIn />
          </span>
        </div>
      </div>
    </div>
  );
}
