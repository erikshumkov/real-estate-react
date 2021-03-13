import React from 'react';
import axios from "axios"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { addFavorites } from "../../actions/auth"

const Result = ({ data, addFavorites }) => {

  const { city, address } = data.route[0];

  const addHomeToFavorites = (data) => {
    console.log(data.address)
    const homeAddress = data.address;

    if (localStorage.token) {
      addFavorites({ homeAddress })
    } else {
      console.error("You need to be logged in")
      alert("You need to be logged in")
    }

  }

  return (
    <Link className="result-link" to={`/item/${city}/${address}`} >
      <button onClick={() => {
        addHomeToFavorites(data)
      }}>Star</button>
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

export default connect(null, { addFavorites })(Result);
