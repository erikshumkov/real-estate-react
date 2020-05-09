import React from 'react';
import MapRealEstate from '../components/MapRealEstate';
import { Link } from "react-router-dom";


const MapPage = ({ filteredData, location }) => {

  let data = filteredData;

  return (
    <div className="MapPage">
      <div className="grid">
        <div className="items">

          {data.map(home => (
            <Link key={home.id} className="home-link" to={`/item/${home.route.city}/${home.route.address}`}>
              <div className="home-item">
                <div className="img">
                  <img src={home.image} alt="home" />
                </div>
                <div className="text">
                  <h4>{home.address}</h4>
                  <span>{home.city}</span>
                  <div className="text-info">
                    <span className="info-type">Typ: {`${home.homeType.charAt(0).toUpperCase()}${home.homeType.substring(1)}`}</span>
                    <span className="info-size">Boarea: {home.sqft} kvm</span>
                    <span className="info-price">Pris: {home.price} kr</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}



        </div>
        <div className="map-container">
          <MapRealEstate data={filteredData} location={location} />
        </div>
      </div>
    </div>
  )
}

export default MapPage
