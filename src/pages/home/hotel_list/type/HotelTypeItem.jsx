import styles from "./HotelTypeItem.module.css";

const HotelTypeItem = (props) => {
  return (
    <div className={styles["hotel-type-item"]}>
      <div className={styles["name-count-div"]}>
        <h4>{props.item.name}</h4>
        <p>{props.item.count} hotels</p>
      </div>
      <img src={props.item.image} alt={props.item.name} />
    </div>
  );
};

export default HotelTypeItem;
