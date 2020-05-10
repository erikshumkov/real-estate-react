import React from 'react';
import MapRealEstate from '../components/MapRealEstate';
import { Link } from "react-router-dom";


const MapPage = ({ data, location }) => {

  const refs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const getItemOnClick = id => {
    // Remove border from each item
    for (const ref in refs) {
      refs[ref].current.firstChild.style.border = "none";
    }

    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    // Add border to selected item
    const li = refs[id].current.firstChild;
    li.style.border = "2px solid black";
  }


  return (
    <div className="MapPage">
      <div className="grid">
        <div className="items">

          {data.map(home => (
            <Link
              key={home.id}
              ref={refs[home.id]}
              className="home-link"
              to={`/item/${home.route.city}/${home.route.address}`}
            >
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
          <MapRealEstate data={data} location={location} getItemOnClick={getItemOnClick} />
        </div>
      </div>
    </div>
  )
}

export default MapPage
