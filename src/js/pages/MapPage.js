import React from 'react'
import MapRealEstate from '../components/MapRealEstate'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { sortByNewest } from "../../actions/itemActions"

import FilterSection from '../layout/FilterSection'


const MapPage = ({ location, item: { filteredData, search }, sortByNewest }) => {

  // Get every house id and creates a reference to the list items
  const listItemRefs = filteredData.reduce((acc, value) => {
    acc[value.id] = React.createRef()
    return acc
  }, {})

  // Get every house id and creates a reference to the markers on the map
  const mapItemRefs = filteredData.reduce((acc, value) => {
    acc[value.id] = React.createRef()
    return acc
  }, {})

  const getItemOnClick = id => {
    // listItemRefs, save indexes in array
    let indexArr = [];
    // Remove border from each item
    for (let ref in listItemRefs) {
      listItemRefs[ref].current.firstChild.style.border = "none";

      // Save indexes to array
      indexArr.push(ref);
    }

    // If it's the first or second list item, make scrollIntoView block start,
    // so the map doesn't get scrolled out of view. For better UX.
    if (id.toString() === indexArr[0] || id.toString() === indexArr[1]) {
      listItemRefs[id].current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // If it's the last list item, make scrollIntoView block end,
    // so the map doesn't get scrolled out of view. For better UX.
    else if (id.toString() === indexArr.slice(-1)[0]) {
      listItemRefs[id].current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }

    else {
      listItemRefs[id].current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

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
    <>
      <FilterSection />
      <div className="result-menu">
        <select
          name='select-filter'
          id='select-filter'
          defaultValue={'newest'}
          onChange={e => sortByNewest(e.target.value)}
        >
          <option value='newest'>Nyast</option>
          <option value='lowest'>Lägst pris</option>
          <option value='highest'>Högst pris</option>
        </select>

        <div className="map">
          <Link to="/">
            <i className="fas fa-bars"></i>
            <span>Visa som lista</span>
          </Link>
        </div>
      </div>
      <div className="MapPage">
        <div className="grid">
          <div className="items">

            {filteredData.map(home => (
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
                      <span className="info-type">Typ: {home.type}</span>
                      <span className="info-size">Boarea: {home.sqft} kvm</span>
                      <span className="info-price">Pris: {home.price} kr</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
          <div className="map-container">
            <MapRealEstate location={location} getItemOnClick={getItemOnClick} mapItemRefs={mapItemRefs} data={filteredData} />
          </div>
        </div>
      </div>
    </>
  )
}

MapPage.propTypes = {
  item: PropTypes.object.isRequired,
  sortByNewest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { sortByNewest })(MapPage)
