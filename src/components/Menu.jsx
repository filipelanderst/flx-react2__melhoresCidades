import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {
  const navigation = [
    { link: '/londres', text: 'Londres' },
    { link: '/paris', text: 'Paris' },
    { link: '/novaIorque', text: 'Nova Iorque' },
  ];

  return (
    <div>
      <nav>
        <button className='menu-toggle'>
          <span className='menu hamburger'></span>
        </button>
        <ul className='menu-links'>
          {navigation.map((nav) => (
            <li key={nav.text}>
              <a href={nav.link}>{nav.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <nav>
        <h2 className='text-cyan-400 text-3xl pl-2 mt-6 mb-4'>Cidades</h2>
        <ul>
          <li>
            <Link to='/londres'>1. Londres</Link>
          </li>
          <li>
            <Link to='/paris'>2. Paris</Link>
          </li>
          <li>
            <Link to='/novaIorque'>3. Nova Iorque</Link>
          </li>
          <li>
            <Link to='/toquio'>4. Tóquio</Link>
          </li>
          <li>
            <Link to='/dubai'>5. Dubai</Link>
          </li>
          <li>
            <Link to='/barcelona'>6. Barcelona</Link>
          </li>
          <li>
            <Link to='/roma'>7. Roma</Link>
          </li>
          <li>
            <Link to='/madrid'>8. Madrid</Link>
          </li>
          <li>
            <Link to='/singapura'>9. Singapura</Link>
          </li>
          <li>
            <Link to='/amsterda'>10. Amsterdã</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Menu;
