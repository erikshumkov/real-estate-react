import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
        <div className='wrapper'>
          <div className='footer-grid'>
            <div className='footer-contact'>
              <h2>Kontakt</h2>
              <ul>
                <li>Kontakta oss</li>
                <li>Om oss</li>
                <li>Jobba hos oss</li>
                <li>Om bostadsmarknaden</li>
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
            <div className='footer-about'>
              <h2>Om oss</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
                sed, totam quam, magni velit a culpa eligendi vel iure nam quod
                ad quae error beatae? Animi ex aperiam quasi nobis? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Quos tempore beatae
                dolor voluptatem.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
