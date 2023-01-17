import React from 'react';

function Modal() {
  return (
    <div className='menu'>
      <ul className='text-center m-auto mt-60 '>
        <li className='my-8 text-4xl'>
          <a href='/'>Home</a>
        </li>
        <li className='my-8 text-4xl'>
          <a href='#'>Cidades</a>
        </li>
        <li className='my-8 text-4xl'>
          <a href='#'>Créditos</a>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
