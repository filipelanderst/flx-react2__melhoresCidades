import { useState } from 'react';
import Hamburger from 'hamburger-react';
import '../styles/menu.css';
import Menu from './Menu';

function Header() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <div>
      <div className='flex justify-between items-center mx-auto max-w-6xl p-6'>
        <a href='/'>
          <img
            className='w-24'
            src='https://www.svgrepo.com/show/393924/skyline-line-park.svg'
            alt=''
          />
        </a>

        <div className='hamburger'>
          <Hamburger onToggle={handleMenu} />
        </div>
      </div>

      <div className={open ? 'menu-active' : 'menu'}>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
