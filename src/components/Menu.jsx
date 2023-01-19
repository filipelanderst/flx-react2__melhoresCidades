import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  function target(e) {
    console.log(e.target);
  }

  return (
    <div>
      {/* <nav>
        <h2 className='text-cyan-400 text-3xl pl-2 mt-6 mb-4'>Cidades</h2>
        <ul>
          <li>
            <Link to='/londres' onClick={target}>
              1. Londres
            </Link>
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
