import React, { Fragment, useEffect } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { favoritesData, removeFavorite } from "../../actions/auth"
import Spinner from '../layout/Spinner'

const SavedHomes = ({ favoritesData, removeFavorite, auth: {
  favorites, loading
}, item: { data } }) => {

  useEffect(() => {
    favoritesData()
  }, [favoritesData])

  const removeItem = (address) => {
    removeFavorite(address)
  }

  const findFavorites = favorites.map(fav => data.find(item => fav.address === item.address))

  return (
    <Fragment>
      <main id='results' className="saved-page">
        <div className='wrapper'>
          <h1>Sparade bostäder</h1>
          <p>Du har <b>{favorites.length}</b> sparade bostäder.</p>

          <div className='results-grid'>
            {loading && favorites.length === 0 ? <Spinner /> : findFavorites.map(item => {
              return (
                <Link key={item.address} className="result-link" to={`/item/${item.route[0].city}/${item.route[0].address}`} >
                  <div className='result'>
                    <div className='image'>
                      <div
                        className='img'
                        style={{
                          backgroundImage: `url(${item.image})`
                        }}
                      >
                        <button onClick={() => removeItem(item.address)}>Unstar</button>
                      </div>
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
  auth: state.auth,
  item: state.item
})

export default connect(mapStateToProps, { favoritesData, removeFavorite })(SavedHomes)
