import React from 'react';

const url = window.location.href;

function Menu() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href={url + '#londres'} onClick={refreshPage}>
              1. Londres
            </a>
          </li>
          <li>
            <a href={url + '#paris'} onClick={refreshPage}>
              2. Paris
            </a>
          </li>

          <li>
            <a href={url + '#novaIorque'} onClick={refreshPage}>
              3. Nova Iorque
            </a>
          </li>
          <li>
            <a href={url + '#toquio'} onClick={refreshPage}>
              4. Tóquio
            </a>
          </li>
          <li>
            <a href={url + '#dubai'} onClick={refreshPage}>
              5. Dubai
            </a>
          </li>
          <li>
            <a href={url + '#barcelona'} onClick={refreshPage}>
              6. Barcelona
            </a>
          </li>
          <li>
            <a href={url + '#roma'} onClick={refreshPage}>
              7. Roma
            </a>
          </li>
          <li>
            <a href={url + '#madrid'} onClick={refreshPage}>
              8. Madrid
            </a>
          </li>
          <li>
            <a href={url + '#singapura'} onClick={refreshPage}>
              9. Singapura
            </a>
          </li>
          <li>
            <a href={url + '#amsterda'} onClick={refreshPage}>
              10. Amsterdã
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
