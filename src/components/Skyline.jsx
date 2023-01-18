import React from 'react';
import city from '../img/cityDecorate.jpg';

function Skyline() {
  return (
    <div>
      <div className='sm:hidden'>
        <img src={city} alt='' />
      </div>
    </div>
  );
}

export default Skyline;
