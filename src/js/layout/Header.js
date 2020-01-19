import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <div className='wrapper'>
          <div className='logo'>
            <a href='/'>Köpabostad.nu</a>
          </div>

          <ul className='menu'>
            <li>Sök bostad</li>
            <li>Sälja bostad</li>
            <li>Hitta mäklare</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
