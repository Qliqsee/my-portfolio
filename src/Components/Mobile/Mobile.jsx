import './Mobile.scss';

export default function Mobile() {
  return (
    <div className='mobile-intro'>
      <div className='section-1'>
        <div className='logo'>Qliqsee.</div>
        <div className='hamburger'>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </div>
      </div>
      <div className='section-2'>
        <div className='avatar'></div>
        <div className='intro-text'></div>
        <div className='description'></div>
        <div className='explore'></div>
      </div>
      <div className='section-3'>
        <div className='social'>
          <span className='github'></span>
          <span className='twitter'></span>
          <span className='linkedin'></span>
        </div>
        <div className='inspiration'></div>
      </div>
    </div>
  );
}
