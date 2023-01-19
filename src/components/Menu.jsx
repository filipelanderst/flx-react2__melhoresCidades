import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(open(false));
  }

  return (
    <div>
      <nav>
        <h2
          className='text-cyan-400 text-3xl pl-2 mt-6 mb-4'
          onClick={handleMenu}
        >
          Cidades
        </h2>
        <ul>
          <li>
            <Link to='/londres' onClick={handleMenu}>
              1. Londres
            </Link>
          </li>
          <li>
            <Link to='/paris' onClick={handleMenu}>
              2. Paris
            </Link>
          </li>
          <li>
            <Link to='/novaIorque' onClick={handleMenu}>
              3. Nova Iorque
            </Link>
          </li>
          <li>
            <Link to='/toquio' onClick={handleMenu}>
              4. Tóquio
            </Link>
          </li>
          <li>
            <Link to='/dubai' onClick={handleMenu}>
              5. Dubai
            </Link>
          </li>
          <li>
            <Link to='/barcelona' onClick={handleMenu}>
              6. Barcelona
            </Link>
          </li>
          <li>
            <Link to='/roma' onClick={handleMenu}>
              7. Roma
            </Link>
          </li>
          <li>
            <Link to='/madrid' onClick={handleMenu}>
              8. Madrid
            </Link>
          </li>
          <li>
            <Link to='/singapura' onClick={handleMenu}>
              9. Singapura
            </Link>
          </li>
          <li>
            <Link to='/amsterda' onClick={handleMenu}>
              10. Amsterdã
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
