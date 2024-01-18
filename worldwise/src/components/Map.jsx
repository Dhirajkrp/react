import React, { useEffect, useState } from "react";

import styles from "./Map.module.css";

import { useNavigate, useSearchParams } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("/app/form")}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
