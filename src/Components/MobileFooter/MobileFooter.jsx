import './MobileFooter.scss';
import { GitHub, Twitter, LinkedIn } from '@material-ui/icons';

export default function MobileFooter() {
  return (
    <>
      <div className='mFooter'>
        <div className='social'>
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
        <div className='inspiration'>
          {' '}
          <span>Inspired By</span> Collins Enebeli
        </div>
      </div>
    </>
  );
}
