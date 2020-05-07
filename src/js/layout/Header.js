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
            <li className="dummy-link">Sälja bostad</li>
            <li className="dummy-link">Hitta mäklare</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
