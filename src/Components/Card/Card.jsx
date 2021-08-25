import './Card.scss';
import { Code, Visibility } from '@material-ui/icons';

export default function Card() {
  return (
    <div className='card'>
      <div className='section-1'>
        <span className='big-font'>Mongo</span>
        <br />
        <span className='min-font'>Mongo</span>
      </div>
      <div className='section-2'>
        <p className='mid-font'>
          I will be writing coodes that will alter history
        </p>
      </div>
      <div className='section-3'>
        <span className='live min-font'>
          <Visibility
            style={{ fontSize: 15, transform: 'translateY(3.5px)' }}
          />{' '}
          Live
        </span>
        <span className='code min-font'>
          <Code style={{ fontSize: 15, marginBottom: '-3.5px' }} /> code
        </span>
      </div>
    </div>
  );
}
