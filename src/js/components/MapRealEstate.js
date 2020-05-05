import React, { useState } from 'react'
import { Map, Marker, TileLayer } from "react-leaflet";

const MapRealEstate = ({ data }) => {
  const [coords] = useState({
    lat: data.coords.lat,
    lng: data.coords.lng
  });

  let position = [coords.lat, coords.lng];

  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position} />


    </Map>
  );

}

export default MapRealEstate;
