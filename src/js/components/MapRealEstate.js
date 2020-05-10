import React from 'react'
import { Map, Marker, TileLayer } from "react-leaflet";

const MapRealEstate = ({ data, location, getItemOnClick }) => {
  // Get pathname
  let path = location.pathname;
  // Check if the route / path is true
  let ifPath = path === "/karta/bostad";

  return (
    <Map center={ifPath ? [57.9, 14.7] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 6 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => (
        <Marker
          key={home.id}
          position={
            [
              home.coords.lat,
              home.coords.lng
            ]}
          onclick={() => getItemOnClick(home.id)}
        />
      ))) : (
          <Marker position={[data.coords.lat, data.coords.lng]} />
        )}
    </Map>
  );

}

export default MapRealEstate;
