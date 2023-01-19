import { useState } from 'react';
import Hamburger from 'hamburger-react';
import '../styles/menu.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <div className='fixed w-full bg-white'>
      <div className='flex justify-between mx-6 items-center'>
        <div>
          <Link to='/'>
            <img
              className='w-14 p-1'
              src='https://www.worldsbestcities.com/wp-content/themes/bestcities/favicons/apple-touch-icon.png'
            />
          </Link>
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
