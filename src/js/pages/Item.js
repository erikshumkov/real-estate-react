import React from 'react'
import MapRealEstate from '../components/MapRealEstate'

const Item = ({ listingsData, props }) => {

  const data = listingsData;
  console.log(props);

  return (
    <div id="item">
      <div className="wrapper">
        <div className="item-container">
          <div className="image" style={{ background: `url(${data[0].image}) no-repeat center center`, backgroundSize: "cover" }}></div>
          <div className="item-text">
            <div className="item-text-header">
              <div className="address">
                <h3>111 Main St</h3>
                <p>New York, New York</p>
              </div>
              <div className="price">
                <h4>4 000 000 kr</h4>
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
                      <td>Villa</td>
                    </tr>
                    <tr>
                      <td>Upplåtelseform</td>
                      <td>Äganderätt</td>
                    </tr>
                    <tr>
                      <td>Boarea</td>
                      <td>100 m&sup2;</td>
                    </tr>
                    <tr>
                      <td>Uteplats</td>
                      <td>Ja</td>
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
            <MapRealEstate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
