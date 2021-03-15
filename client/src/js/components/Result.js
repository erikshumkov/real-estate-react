import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"

const Result = ({ data, addFavorites }) => {

  const { city, address } = data.route[0];

  return (
    <Link className="result-link" to={`/item/${city}/${address}`} >
      <div className='result'>
        <div className='image'>
          <div
            className='img'
            style={{
              backgroundImage: `url(${data.image})`
            }}
          >
          </div>
        </div>
        <div className='info'>
          <h5>{data.city}</h5>
          <h2>{data.address}</h2>
          <div className='info-facts'>
            <span>{data.price} kr</span>
            <span>{data.sqmeter} kvm</span>
            <span>
              <i className='far fa-building'></i>
              {data.rooms} rum
          </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

Result.propTypes = {
  data: PropTypes.object.isRequired
}

export default connect(null)(Result);
