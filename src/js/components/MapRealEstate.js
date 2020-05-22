import React from 'react'
import L from "leaflet";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapRealEstate = ({ data, location, getItemOnClick, mapItemRefs, search }) => {
  // Get pathname
  let path = location.pathname;
  // Check if the route / path is true
  let ifPath = path === "/karta/bostad";

  // Get starter z-index from hoverMapMarker and save it.
  let initZindex;

  const hoverMapMarker = (e) => {
    let style = e.target._icon.firstChild.style;
    let styleParent = e.target._icon.style;
    // Save initial z-index to variable.
    initZindex = styleParent.zIndex;
    // Set new z-index to bring map marker to the front.
    styleParent.zIndex = 1000;
    style.transform = "scale(1.2) rotate(-45deg)";
  }

  const removeHoverStyles = (e) => {
    let styleParent = e.target._icon.style;
    let style = e.target._icon.firstChild.style;
    // Reset the z-index to it's original value to bring it to the back.
    styleParent.zIndex = initZindex;
    style.transform = "scale(1) rotate(-45deg)";
  }

  if (search === "Linköping") return (
    <Map center={ifPath ? [58.41, 15.62] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 12 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => {
        if (home.homeType === "villa" || home.homeType === "radhus") {
          return <Marker
            key={home.id}
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[0],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[1],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );
  else if (search === "Stockholm") return (
    <Map center={ifPath ? [59.31, 18.06] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 10 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => {
        if (home.homeType === "villa" || home.homeType === "radhus") {
          return <Marker
            key={home.id}
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[0],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[1],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );

  else if (search === "Göteborg") return (
    <Map center={ifPath ? [57.69, 11.98] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 11 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => {
        if (home.homeType === "villa" || home.homeType === "radhus") {
          return <Marker
            key={home.id}
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[0],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[1],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );

  else return (
    <Map center={ifPath ? [57.9, 14.7] : [data.coords.lat, data.coords.lng]} zoom={ifPath ? 6 : 16} scrollWheelZoom={false} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {ifPath ? (data.map(home => {
        if (home.homeType === "villa" || home.homeType === "radhus") {
          return <Marker
            key={home.id}
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[0],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[1],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            ref={mapItemRefs[home.id]}
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            onmouseover={(e) => hoverMapMarker(e)}
            onmouseout={(e) => removeHoverStyles(e)}
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
            icon={L.divIcon({
              className: "custom-div-icon",
              html: html[2],
              iconSize: [30, 42],
              iconAnchor: [15, 42]
            })}
            position={[data.coords.lat, data.coords.lng]}
          />
        )}
    </Map>
  );

}

// Html for leaflet icons.
const html = [

  // 0
  "<div style='background: linear-gradient(125deg, rgba(221,160,221,1) 0%, rgba(114,14,158,1) 100%);' class='marker-pin'></div><i class='material-icons'>home</i>",

  // 1
  "<div style='background: linear-gradient(294deg, rgba(210,18,46,1) 0%, rgba(250,128,114,1) 100%);' class='marker-pin'></div><i class='material-icons'>apartment</i>",

  // 2
  "<div style='background:linear-gradient(53deg, rgba(0,118,206,1) 0%, rgba(29,161,242,1) 100%);' class='marker-pin'></div><i class='material-icons'>home</i>"

]

export default MapRealEstate;
