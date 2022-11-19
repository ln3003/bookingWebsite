import styles from "./GuestsLoveItem.module.css";

const GuestsLoveItem = (props) => {
  return (
    <div className={styles["guests-love-item"]}>
      <div className={styles["item-image"]}>
        <img src={props.item.image_url} alt={props.item.image_url} />
      </div>
      <a href="/detail">{props.item.name}</a>
      <p className={styles["city"]}>{props.item.city}</p>
      <p className={styles["price"]}>Starting from&nbsp;${props.item.price}</p>
      <p className={styles["rate"]}>
        <span>{props.item.rate}</span>&nbsp;&nbsp;&nbsp;{props.item.type}
      </p>
    </div>
  );
};

export default GuestsLoveItem;
