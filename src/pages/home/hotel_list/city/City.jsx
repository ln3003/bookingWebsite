import styles from "./City.module.css";
import CityItem from "./CityItem";

const cityArray = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = () => {
  return (
    <div className={styles["city-container"]}>
      {cityArray.map((x) => {
        return <CityItem key={x.name} item={x} />;
      })}
    </div>
  );
};

export default City;
