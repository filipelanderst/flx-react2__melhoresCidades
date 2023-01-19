import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <div className=' font-bold p-10 -mt-6'>
      <h3 className='text-center'>Feito com</h3>

      <img
        className='img-react'
        src='https://www.svgrepo.com/show/452092/react.svg'
        alt=''
      />
    </div>
  );
}

export default Footer;
