import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getHomeData } from "../../actions/itemActions"
import { addFavorites, favoritesData, removeFavorite } from "../../actions/auth"

import MapRealEstate from '../components/MapRealEstate'
import Spinner from '../layout/Spinner'

const Item = ({ listingsData, history, match, location, addFavorites, favoritesData, removeFavorite, item: { data, loading }, auth: { favorites, isAuthenticated } }) => {

  useEffect(() => {
    // If the data array in the state is empty get data from DB
    data.length === 0 && getHomeData()

    favorites.length === 0 && favoritesData()

  }, [data, favoritesData])

  const checkRoute = data.filter(
    data => {
      return data.route[0].address === match.params.address
    }
  );

  let home = checkRoute[0]

  if (home === undefined) {
    home = []
    getHomeData()
  }

  const addHomeToFavorites = (data) => {
    const homeAddress = data.address;

    if (localStorage.token) {
      addFavorites({ homeAddress })
    } else {
      console.error("You need to be logged in")
      alert("You need to be logged in to be able to do that")

      // Redirect to log in page
      history.push("/mina-sidor/logga-in")
    }
  }

  const removeHomeFromFavorites = (address) => {
    if (isAuthenticated) {
      removeFavorite(address)
    } else {
      console.error("You need to be logged in")
      alert("You need to be logged in to be able to do that")

      // Redirect to log in page
      history.push("/mina-sidor/logga-in")
    }
  }

  if (loading && data.length === 0) {
    return (
      <Spinner />
    )
  } else {
    return (
      <div id="item">
        <div className="wrapper">
          <div className="item-container">
            <div className="image" style={{ background: `url(${home.image}) no-repeat center center`, backgroundSize: "cover" }}></div>

            {favorites.find(item => item.address === home.address) === undefined ?
              (
                <button className="save" onClick={() => addHomeToFavorites(home)}>
                  <i className="far fa-bookmark"></i> Spara
                </button>
              ) :
              (
                <button className="removeFromSave" onClick={() => removeHomeFromFavorites(home.address)}>
                  <i className="fas fa-bookmark"></i> Sparad
                </button>
              )}

            <div className="item-text">
              <div className="item-text-header">
                <div className="address">
                  <h3>{home.address}</h3>
                  <p>{home.city}</p>
                </div>
                <div className="price">
                  <h4>{home.price} kr</h4>
                </div>
              </div>
              <div className="item-text-body">
                <div className="info">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto corrupti aspernatur, asperiores quibusdam voluptate ad exercitationem quod officiis sed quos repellendus deleniti unde ut provident aliquid iste accusantium excepturi!
                </p>
                </div>
                <div className="facts">
                  <table>
                    <tbody>
                      <tr>
                        <td>Bostadstyp</td>
                        <td>{home.type}</td>
                      </tr>
                      <tr>
                        <td>Antal rum</td>
                        <td>{home.rooms} rum</td>
                      </tr>
                      <tr>
                        <td>Boarea</td>
                        <td>{home.sqmeter} m&sup2;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <div className="map-text">
              <h3>Karta</h3>
            </div>
            <div className="map">
              <MapRealEstate data={home} location={location} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
})

export default connect(mapStateToProps, { getHomeData, addFavorites, removeFavorite, favoritesData })(Item)
