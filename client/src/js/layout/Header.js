import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className='wrapper'>
          <div className='logo'>
            <Link to='/'>FastHem</Link>
          </div>

          <ul className='menu'>
            <li>Till salu</li>
            <li className="dummy-link">Sälja</li>
            <li className="dummy-link">Köpa</li>
            <li className="dummy-link">Hitta mäklare</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
