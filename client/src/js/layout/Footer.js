import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <footer id='footer'>
      <div className='wrapper'>
        <div className='footer-grid'>
          <div className='footer-contact'>
            <h2>Sälj med oss</h2>
            <ul>
              <li>Fri värdering</li>
              <li>Säkert köp</li>
              <li>Besiktning</li>
              <li>Fotografering</li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h2>Köpa Bostad</h2>
            <ul>
              <li>Till salu</li>
              <li>Bevaka objekt</li>
              <li>Nyproduktion</li>
              <li>Komersiella</li>
            </ul>
          </div>
          <div className='footer-contact'>
            <h2>Kontakt</h2>
            <ul>
              <li>Hitta mäklare</li>
              <li>Jobba hos oss</li>
              <li>Kunders omdömen</li>
              <li>Press</li>
            </ul>
          </div>
          <div className='footer-social'>
            <h2>Följ oss</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className='fab fa-twitter-square'></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)

export default Footer;
