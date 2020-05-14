import React from 'react';
import MapRealEstate from '../components/MapRealEstate';
import { Link } from "react-router-dom";


const MapPage = ({ data, location }) => {

  // Get every house id and creates a reference to the list items
  const listItemRefs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  // Get every house id and creates a reference to the markers on the map
  const mapItemRefs = data.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const getItemOnClick = id => {
    // Remove border from each item
    for (const ref in listItemRefs) {
      listItemRefs[ref].current.firstChild.style.border = "none";
    }

    listItemRefs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    // Add border to selected item
    const li = listItemRefs[id].current.firstChild;
    li.style.border = "2px solid black";
  }

  // Save initial z index of map markers
  let initZindex;

  // Add style to map markers on hover list item.
  const enterLi = (id) => {
    let style = mapItemRefs[id].current.leafletElement._icon.firstChild.style;
    initZindex = mapItemRefs[id].current.leafletElement._icon.style.zIndex;
    mapItemRefs[id].current.leafletElement._icon.style.zIndex = 1000;
    style.transform = "scale(1.2) rotate(-45deg)";
  }

  // Remove styles when you leave list item.
  const leaveLi = (id) => {
    let style = mapItemRefs[id].current.leafletElement._icon.firstChild.style;
    mapItemRefs[id].current.leafletElement._icon.style.zIndex = initZindex;
    style.transform = "scale(1) rotate(-45deg)";
  }


  return (
    <div className="MapPage">
      <div className="grid">
        <div className="items">

          {data.map(home => (
            <Link
              onMouseEnter={() => enterLi(home.id)}
              onMouseLeave={() => leaveLi(home.id)}
              key={home.id}
              ref={listItemRefs[home.id]}
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
          <MapRealEstate data={data} location={location} getItemOnClick={getItemOnClick} mapItemRefs={mapItemRefs} />
        </div>
      </div>
    </div>
  )
}

export default MapPage
