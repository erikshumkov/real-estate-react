import React, { Fragment, useEffect } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { favoritesData } from "../../actions/auth"

const SavedHomes = ({ favoritesData, favorites }) => {

  useEffect(() => {
    favoritesData()
  }, [favoritesData])

  return (
    <Fragment>
      <main id='results'>
        <div className='wrapper'>
          <div className='results-grid'>
            {favorites.map(item => {
              return (
                <Link key={item.address} className="result-link" to={`/item/${item.route[0].city}/${item.route[0].address}`} >
                  <div className='result'>
                    <div className='image'>
                      <div
                        className='img'
                        style={{
                          backgroundImage: `url(${item.image})`
                        }}
                      ></div>
                    </div>
                    <div className='info'>
                      <h5>{item.city}</h5>
                      <h2>{item.address}</h2>
                      <div className='info-facts'>
                        <span>{item.price} kr</span>
                        <span>{item.sqmeter} kvm</span>
                        <span>
                          <i className='far fa-building'></i>
                          {item.rooms} rum
          </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  favorites: state.auth.favorites
})

export default connect(mapStateToProps, { favoritesData })(SavedHomes)
