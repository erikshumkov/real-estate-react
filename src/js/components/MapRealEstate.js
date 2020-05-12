import React from 'react'
import L from "leaflet";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapRealEstate = ({ data, location, getItemOnClick }) => {
  // Get pathname
  let path = location.pathname;
  // Check if the route / path is true
  let ifPath = path === "/karta/bostad";

  // Custom Leaflet icon
  const icon = L.divIcon({
    className: "custom-div-icon",
    html: "<div style='background-color:#1493bc;' class='marker-pin'></div><i class='material-icons'>home</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  })

  return (
    <Map center={ifPath ? [57.9, 14.7] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 6 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => (
        <Marker
          key={home.id}
          icon={icon}
          onmouseover={(e) => {
            e.target._icon.firstChild.style.backgroundColor = "#0e6a88";
            e.target._icon.firstChild.style.transform = "scale(1.2) rotate(-45deg)";
          }}
          onmouseout={(e) => {
            e.target._icon.firstChild.style.backgroundColor = "#1493bc";
            e.target._icon.firstChild.style.transform = "scale(1) rotate(-45deg)";
          }}
          position={
            [
              home.coords.lat,
              home.coords.lng
            ]}
          onclick={() => getItemOnClick(home.id)}
        />
      ))) : (
          <Marker
            icon={icon}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );

}

export default MapRealEstate;
