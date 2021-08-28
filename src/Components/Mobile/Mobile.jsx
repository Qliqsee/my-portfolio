import './Mobile.scss';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileFooter from '../MobileFooter/MobileFooter';
import Slider from '../Slider/Slider';
import { useState, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import { ArrowRight } from '@material-ui/icons';

export default function Mobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [truthy, setTruthy] = useState(false);
  useEffect(() => {
    setTruthy(true);
    setTimeout(() => {
      setTruthy(false);
    }, 3000);
  }, []);

  return (
    <div className='mobile-intro'>
      <div className='section-1'>
        <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className='section-2'>
        <div className='container'>
          <div className='avatar'></div>
          <Avatar width={100} height={100} />
          <div className='intro-text'>Hello, I'm Agboola Iyanu.</div>
          <div className='description'>
            <p className={`${truthy ? 'active' : ''}`}>
              I'm a frontend developer. I create interactive experiences for
              amazing people using technology. I enjoy tweaking stylesheets and
              crafting layouts to achieve desired aesthetics.
            </p>
          </div>
          <div className='explore'>
            <span>
              Explore{' '}
              <ArrowRight style={{ fontSize: 22, marginBottom: '-5px' }} />
            </span>
          </div>
        </div>
      </div>
      <div className='section-3'></div>
      <MobileFooter />

      <Slider menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
