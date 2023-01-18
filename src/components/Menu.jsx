import React from 'react';

function Menu() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='#londres' onClick={refreshPage}>
              1. Londres
            </a>
          </li>
          <li>
            <a href='#paris' onClick={refreshPage}>
              2. Paris
            </a>
          </li>

          <li>
            <a href='#novaIorque' onClick={refreshPage}>
              3. Nova Iorque
            </a>
          </li>
          <li>
            <a href='#toquio' onClick={refreshPage}>
              4. Tóquio
            </a>
          </li>
          <li>
            <a href='#dubai' onClick={refreshPage}>
              5. Dubai
            </a>
          </li>
          <li>
            <a href='#barcelona' onClick={refreshPage}>
              6. Barcelona
            </a>
          </li>
          <li>
            <a href='#roma' onClick={refreshPage}>
              7. Roma
            </a>
          </li>
          <li>
            <a href='#madrid' onClick={refreshPage}>
              8. Madrid
            </a>
          </li>
          <li>
            <a href='#singapura' onClick={refreshPage}>
              9. Singapura
            </a>
          </li>
          <li>
            <a href='#amsterda' onClick={refreshPage}>
              10. Amsterdã
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
