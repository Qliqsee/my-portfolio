import './MobileHeader.scss';

export default function MobileHeader({ menuOpen, setMenuOpen }) {
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={`${menuOpen ? 'mHeader active' : 'mHeader'}`}>
        <div className='logo'>Qliqsee.</div>
        <div className='hamburger' onClick={toggleMenu}>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </div>
      </div>
    </>
  );
}
