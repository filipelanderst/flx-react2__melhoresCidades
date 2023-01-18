import React from 'react';
import city from '../img/cityDecorate.jpg';

function Skyline() {
  return (
    <div>
      <div className='sm:hidden mt-12 -mb-12'>
        <img src={city} alt='' />
      </div>
    </div>
  );
}

export default Skyline;
