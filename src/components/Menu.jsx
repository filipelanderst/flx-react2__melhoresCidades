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
            <button type='submit' onClick={refreshPage}>
              <a href='#londres'>1. Londres</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#paris'>2. Paris</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#novaIorque'>3. Nova Iorque</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#toquio'>4. Tóquio</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#dubai'>5. Dubai</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#roma'>7. Roma</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#madrid'>8. Madrid</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#singapura'>9. Singapura</a>
            </button>
          </li>
          <li>
            <button type='submit' onClick={refreshPage}>
              <a href='#amsterda'>10. Amsterdã</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
