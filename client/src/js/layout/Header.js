import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <Fragment>
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

        <button type="button" className="btn btn-light hamburger-menu">
          <i className="fas fa-bars"></i>
          <span>
            Mer
          </span>
        </button>
      </div>
    </header>
  </Fragment>
)

export default Header;
