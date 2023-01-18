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
    <div className='fixed w-full main-bg'>
      <div className='flex justify-between mx-6 items-center'>
        <div>
          <a href='/'>
            <img
              className='w-20 p-2'
              src='https://www.svgrepo.com/show/393923/skyline-line-buildings.svg'
            />
          </a>
        </div>

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
