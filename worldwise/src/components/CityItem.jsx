import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  return (
    <Link
      to={`/app/cities/${id}?lat=${position.lat}&&lng=${position.lng}`}
      className={`${styles.cityItem} ${
        currentCity.id === id ? styles["cityItem--active"] : ""
      }`}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}> {cityName}</h3>
      <time className={styles.data}> ({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </Link>
  );
}

export default CityItem;
