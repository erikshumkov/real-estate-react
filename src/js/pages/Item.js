import React from 'react'
import MapRealEstate from '../components/MapRealEstate'

const Item = ({ listingsData, match }) => {


  let checkRoute = listingsData.filter(
    data => data.route.address === match.params.address
  );
  let data = listingsData[checkRoute[0].id];

  return (
    <div id="item">
      <div className="wrapper">
        <div className="item-container">
          <div className="image" style={{ background: `url(${data.image}) no-repeat center center`, backgroundSize: "cover" }}></div>
          <div className="item-text">
            <div className="item-text-header">
              <div className="address">
                <h3>{data.address}</h3>
                <p>{data.city}</p>
              </div>
              <div className="price">
                <h4>{data.price} kr</h4>
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
                      <td>{data.type}</td>
                    </tr>
                    <tr>
                      <td>Antal rum</td>
                      <td>{data.rooms} rum</td>
                    </tr>
                    <tr>
                      <td>Boarea</td>
                      <td>{data.sqft} m&sup2;</td>
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
            <MapRealEstate data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
