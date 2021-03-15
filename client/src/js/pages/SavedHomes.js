import React, { Fragment, useEffect } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { favoritesData, logout } from "../../actions/auth"
import Spinner from '../layout/Spinner'

const SavedHomes = ({ favoritesData, logout, auth: {
  favorites, loading, isAuthenticated
}, item: { data } }) => {

  useEffect(() => {

    favorites.length === 0 && favoritesData()

  }, [favorites, favoritesData])

  // Get home(property) full object of key value pairs
  let findFavorites = favorites.map(fav => data.find(item => fav.address === item.address))

  // On page refresh check that findFavorites has correct properties inside of array
  if (findFavorites.includes(undefined)) {
    findFavorites = []
  }

  return (
    <Fragment>
      <div className="profile-links">
        <ul className="menu">
          <Link to="/" onClick={logout}><li>Logga ut</li></Link>
        </ul>
      </div>
      <main id='results' className="saved-page" style={favorites.length === 0 ? { marginBottom: "1000px", marginTop: "40px" } : { marginBottom: "200px", marginTop: "40px" }}>
        <div className='wrapper'>
          <h1 style={{ marginBottom: "14px" }}>Sparade bostäder</h1>
          <p>Du har <b>{favorites.length}</b> sparade bostäder.</p>

          <div className='results-grid' style={{ marginTop: "25px" }}>
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

export default connect(mapStateToProps, { favoritesData, logout })(SavedHomes)
