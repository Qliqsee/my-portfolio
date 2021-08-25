import './Mobile.scss';
import MobileHeader from '../MobileHeader/MobileHeader';
import MobileFooter from '../MobileFooter/MobileFooter';

export default function Mobile() {
  return (
    <div className='mobile-intro'>
      <MobileHeader />
      <div className='container'>
        <div className='avatar'></div>
        <div className='intro-text'></div>
        <div className='description'></div>
        <div className='explore'></div>
      </div>
      <MobileFooter />
    </div>
  );
}
