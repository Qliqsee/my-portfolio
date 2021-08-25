import './Intro.scss';
import { useState } from 'react';
import { GitHub, Twitter } from '@material-ui/icons';
import LaunchIcon from '@material-ui/icons/Launch';
import Avatar from '../Avatar/Avatar';

export default function Into() {
  const [selected, setSelected] = useState('work');
  function getId(e) {
    setSelected(e.target.id);
  }
  return (
    <div className='intro'>
      <div className='section-1'>
        <span className='span'>
          Hello, I'm <br /> Agboola Iyanu.
        </span>
        <p>
          I'm a <span>frontend developer</span>. I create interactive{' '}
          experiences for amazing people using <span>technology</span>. I enjoy
          tweaking <span>stylesheets</span> and crafting layouts to achieve
          desired aesthetics.
        </p>
      </div>

      <div className='home-nav section-2'>
        <span
          onClick={getId}
          id='work'
          className={`rule ${selected === 'work' ? 'active' : ''}`}
        >
          00 <span></span> WORK
        </span>
        <br />
        <span
          onClick={getId}
          id='resume'
          className={`rule ${selected === 'resume' ? 'active' : ''}`}
        >
          01 <span></span> RESUME
        </span>
        <br />
        <span
          onClick={getId}
          id='contact'
          className={`rule ${selected === 'contact' ? 'active' : ''}`}
        >
          02 <span></span> CONTACT
        </span>
      </div>

      <div className='social section-3'>
        <Avatar width={35} height={35} />
        <span className='s-icons'>
          <GitHub style={{ fontSize: 15 }} />{' '}
          <span>
            Github <LaunchIcon style={{ fontSize: 16 }} />
          </span>
        </span>
        <span className='s-icons'>
          <Twitter style={{ fontSize: 15 }} />{' '}
          <span>
            Twitter <LaunchIcon style={{ fontSize: 16 }} />
          </span>
        </span>
        <div className='inspiration' style={{ fontSize: 14, marginTop: 50 }}>
          <span style={{ color: '#807979' }}>Inspired by</span> Collins Enebeli
        </div>
      </div>
    </div>
  );
}
