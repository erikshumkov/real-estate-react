import React from 'react'
import L from "leaflet";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapRealEstate = ({ data, location, getItemOnClick, refs2 }) => {
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

      {ifPath ? (data.map(home => {
        if (home.homeType === "villa" || home.homeType === "radhus") {
          return <Marker
            key={home.id}
            ref={refs2[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: "<div style='background-color:#f9c006;' class='marker-pin'></div><i class='material-icons'>home</i>",
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => {
              // e.target._icon.firstChild.style.backgroundColor = "#0e6a88";
              e.target._icon.firstChild.style.transform = "scale(1.2) rotate(-45deg)";
            }}
            onmouseout={(e) => {
              // e.target._icon.firstChild.style.backgroundColor = "#1493bc";
              e.target._icon.firstChild.style.transform = "scale(1) rotate(-45deg)";
            }}
            position={
              [
                home.coords.lat,
                home.coords.lng
              ]}
            onclick={() => getItemOnClick(home.id)}
          />
        }
        if (home.homeType === "apartment") {
          return <Marker
            key={home.id}
            ref={refs2[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: "<div style='background-color:#fb3640;' class='marker-pin'></div><i class='material-icons'>apartment</i>",
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => {
              // e.target._icon.firstChild.style.backgroundColor = "#0e6a88";
              e.target._icon.firstChild.style.transform = "scale(1.2) rotate(-45deg)";
            }}
            onmouseout={(e) => {
              // e.target._icon.firstChild.style.backgroundColor = "#1493bc";
              e.target._icon.firstChild.style.transform = "scale(1) rotate(-45deg)";
            }}
            position={
              [
                home.coords.lat,
                home.coords.lng
              ]}
            onclick={() => getItemOnClick(home.id)}
          />
        }
        if (home.homeType === "fritidshus") {
          return <Marker
            key={home.id}
            ref={refs2[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: "<div style='background-color:#257bc1;' class='marker-pin'></div><i class='material-icons'>home</i>",
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => {
              e.target._icon.firstChild.style.backgroundColor = "#257bc1";
              e.target._icon.firstChild.style.transform = "scale(1.2) rotate(-45deg)";
            }}
            onmouseout={(e) => {
              // e.target._icon.firstChild.style.backgroundColor = "#1493bc";
              e.target._icon.firstChild.style.transform = "scale(1) rotate(-45deg)";
            }}
            position={
              [
                home.coords.lat,
                home.coords.lng
              ]}
            onclick={() => getItemOnClick(home.id)}
          />
        }
        return null;
      })) : (
          <Marker
            icon={icon}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );

}

export default MapRealEstate;
