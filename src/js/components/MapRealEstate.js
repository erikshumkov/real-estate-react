import React, { useState } from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as parkData from "../data/skateboard-parks.json";


const MapRealEstate = () => {
  const [activePark, setActivePark] = useState(null);

  return (
    <Map center={[45.44, -75.45]} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
        />
      ))}

    </Map>
  );

}

export default MapRealEstate;
