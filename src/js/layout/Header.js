import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className='wrapper'>
          <div className='logo'>
            <Link to='/'>Fastighet</Link>
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
