import './Avatar.scss';

import React from 'react';

export default function Avatar({ width, height }) {
  return (
    <>
      <span
        className='roundedAvatar'
        style={{
          backgroundImage: 'url(images/hacker.png)',
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></span>
    </>
  );
}
