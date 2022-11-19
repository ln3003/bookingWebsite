import styles from "./CityItem.module.css";

const CityItem = (props) => {
  return (
    <div className={styles["city-item"]}>
      <img src={props.item.image} alt={props.item.name} />
      <h1>{props.item.name}</h1>
      <h3>{props.item.subText}</h3>
    </div>
  );
};

export default CityItem;
