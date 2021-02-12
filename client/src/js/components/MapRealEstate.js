import React from 'react'
import L from "leaflet"
import PropTypes from 'prop-types'
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { connect } from "react-redux"
import { getCityData } from "../../actions/itemActions"

function SetViewOnSearch({ coords, zoom }) {
  const map = useMap()
  map.setView(coords, zoom)
  return null
}

const MapRealEstate = ({ item: { search, cityData, loading }, data, location, getItemOnClick, mapItemRefs, getCityData }) => {
  // Get starter z-index (initZindex) from hoverMapMarker and save it.
  let initZindex, cityObj, path, ifPath

  // Get pathname
  path = location.pathname
  // Check if the route / path is true
  ifPath = path === "/karta/bostad"

  const hoverMapMarker = (e) => {
    let style = e.target._icon.firstChild.style
    let styleParent = e.target._icon.style
    // Save initial z-index to variable.
    initZindex = styleParent.zIndex
    // Set new z-index to bring map marker to the front.
    styleParent.zIndex = 1000
    style.transform = "scale(1.2) rotate(-45deg)"
  }

  const removeHoverStyles = (e) => {
    let styleParent = e.target._icon.style
    let style = e.target._icon.firstChild.style
    // Reset the z-index to it's original value to bring it to the back.
    styleParent.zIndex = initZindex
    style.transform = "scale(1) rotate(-45deg)"
  }

  if (cityData.length > 0 && search.length > 2) {

    cityData.filter(item => {

      let text = search.toLowerCase()
      let city = item.city.toLowerCase()
      let match = city.match(text)

      if (match !== null && match.length > 0) {
        return cityObj = cityData.find(item => item.city.toLowerCase() === match.input)
      }
      else if (cityObj === undefined) {
        return cityObj = { city: "" }
      }
      else {
        return { city: "" }
      }
    })

  }

  if (cityData.length > 0) {
    if (search.length > 2 && search === cityObj.city) return (
      <MapContainer
        center={ifPath ? [cityObj.lat, cityObj.lng] : [data.coords[0].lat, data.coords[0].lng]}
        zoom={ifPath ? cityObj.zoom : 16}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {ifPath ? (data.map(home => {
          const { homeType, id, coords } = home

          return <Marker
            key={id}
            ref={mapItemRefs[id]}
            icon={
              homeType === "villa" || homeType === "radhus" ?
                L.divIcon({
                  className: "custom-div-icon",
                  html: markerStyle[0],
                  iconSize: [30, 42],
                  iconAnchor: [15, 42]
                })
                :
                homeType === "apartment" ?
                  L.divIcon({
                    className: "custom-div-icon",
                    html: markerStyle[1],
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                  })
                  :
                  L.divIcon({
                    className: "custom-div-icon",
                    html: markerStyle[2],
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                  })}
            eventHandlers={{
              click: () => {
                getItemOnClick(id)
              },
              mouseover: (e) => {
                hoverMapMarker(e)
              },
              mouseout: (e) => {
                removeHoverStyles(e)
              }
            }}
            position={
              [
                coords[0].lat,
                coords[0].lng
              ]}
          >
          </Marker>
        })) : (
            <Marker
              icon={L.divIcon({
                className: "custom-div-icon",
                html: markerStyle[2],
                iconSize: [30, 42],
                iconAnchor: [15, 42]
              })}
              position={[data.coords[0].lat, data.coords[0].lng]}
            />
          )}
        <SetViewOnSearch coords={ifPath ? [cityObj.lat, cityObj.lng] : [data.coords[0].lat, data.coords[0].lng]} zoom={ifPath ? cityObj.zoom : 16} />
      </MapContainer>
    )
    else return (
      <MapContainer
        center={ifPath ? [62.9, 14.7] : [data.coords[0].lat, data.coords[0].lng]}
        zoom={ifPath ? 5 : 16}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {ifPath ? (data.map(home => {
          const { homeType, id, coords } = home
          return <Marker
            key={id}
            ref={mapItemRefs[id]}
            icon={
              homeType === "villa" || homeType === "radhus" ?
                L.divIcon({
                  className: "custom-div-icon",
                  html: markerStyle[0],
                  iconSize: [30, 42],
                  iconAnchor: [15, 42]
                })
                :
                homeType === "apartment" ?
                  L.divIcon({
                    className: "custom-div-icon",
                    html: markerStyle[1],
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                  })
                  :
                  L.divIcon({
                    className: "custom-div-icon",
                    html: markerStyle[2],
                    iconSize: [30, 42],
                    iconAnchor: [15, 42]
                  })}
            eventHandlers={{
              click: () => {
                getItemOnClick(id)
              },
              mouseover: (e) => {
                hoverMapMarker(e)
              },
              mouseout: (e) => {
                removeHoverStyles(e)
              }
            }}
            position={
              [
                coords[0].lat,
                coords[0].lng
              ]}
          />

        })) : (
            <Marker
              icon={L.divIcon({
                className: "custom-div-icon",
                html: markerStyle[2],
                iconSize: [30, 42],
                iconAnchor: [15, 42]
              })}
              position={[data.coords[0].lat, data.coords[0].lng]}
            />
          )}
        <SetViewOnSearch coords={ifPath ? [62.9, 14.7] : [data.coords[0].lat, data.coords[0].lng]} zoom={ifPath ? 5 : 16} />
      </MapContainer>
    )
  } else return null

}

// Html and styling array for leaflet icons.
const markerStyle = [
  // 0
  "<div style='background: linear-gradient(125deg, rgba(221,160,221,1) 0%, rgba(114,14,158,1) 100%);' class='marker-pin'></div><i class='material-icons'>home</i>",
  // 1
  "<div style='background: linear-gradient(294deg, rgba(210,18,46,1) 0%, rgba(250,128,114,1) 100%);' class='marker-pin'></div><i class='material-icons'>apartment</i>",
  // 2
  "<div style='background:linear-gradient(53deg, rgba(0,118,206,1) 0%, rgba(29,161,242,1) 100%);' class='marker-pin'></div><i class='material-icons'>home</i>"
]

MapRealEstate.propTypes = {
  item: PropTypes.object.isRequired,
  getCityData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { getCityData })(MapRealEstate)