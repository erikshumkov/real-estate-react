import React from 'react';
import { Link } from 'react-router-dom';

const Result = ({ data }) => {
  return (
    <Link className="result-link" to="/item/x">
      <div className='result'>
        <div className='image'>
          <div
            className='img'
            style={{
              backgroundImage: `url(${data.image})`
            }}
          ></div>
        </div>
        <div className='info'>
          <h5>{data.city}</h5>
          <h2>{data.address}</h2>
          <div className='info-facts'>
            <span>{data.price} kr</span>
            <span>{data.sqft} kvm</span>
            <span>
              <i className='far fa-building'></i>
              {data.rooms} rum
          </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Result;
