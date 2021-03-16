import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { logout } from "../../actions/auth"

const Header = ({ isAuthenticated, logout }) => {
  return (
    <Fragment>
      <header>
        <div className='wrapper'>
          <div className='logo'>
            <Link to='/'>FastHem</Link>
            <ul className="menu mobile-menu">
              <Link to="/mina-sidor/sparat"><li>Mina sidor</li></Link>
            </ul>
          </div>

          <ul className='menu'>
            <Link to="/"><li className="selected">Till salu</li></Link>
            <li className="dummy-link">Sälja</li>
            <li className="dummy-link">Köpa</li>
            <li className="dummy-link">Hitta mäklare</li>
          </ul>


          {!isAuthenticated ? (
            <ul className="menu desktop">
              <Link to="/mina-sidor/logga-in"><li>Mina sidor</li></Link>
            </ul>
          ) : (
            <ul className="menu desktop">
              <Link to="/mina-sidor/sparat"><li>Mina sidor</li></Link>
            </ul>
          )}


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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Header)
