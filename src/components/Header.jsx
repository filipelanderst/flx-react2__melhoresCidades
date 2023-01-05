import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-center mx-auto max-w-6xl p-6 '>
      <a href='/'>
        {' '}
        <img
          className='w-24'
          src='https://www.svgrepo.com/show/393924/skyline-line-park.svg'
          alt=''
        />
      </a>

      <nav>
        <ul className='flex text-2xl space-x-4 '>
          <li className='border-b-2 border-transparent hover:border-b-2  hover:border-amber-400'>
            <a href='#'>Home</a>
          </li>
          <li className='border-b-2 border-transparent hover:border-b-2  hover:border-amber-400'>
            <a href='#'>Cidades</a>
          </li>
          <li className='border-b-2 border-transparent hover:border-b-2  hover:border-amber-400'>
            <a href='#'>Créditos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
