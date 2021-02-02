import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getHomeData } from "../../actions/itemActions"

import MapRealEstate from '../components/MapRealEstate'
import Spinner from '../layout/Spinner'

const Item = ({ listingsData, match, location, item: { data, loading } }) => {

  useEffect(() => {
    // If the data array in the state is empty get data from DB
    data.length === 0 && getHomeData()

  }, [data])

  const checkRoute = data.filter(
    data => data.route[0].address === match.params.address
  );

  const home = checkRoute[0]

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
  item: state.item
})

export default connect(mapStateToProps, { getHomeData })(Item)
