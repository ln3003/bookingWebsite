import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div className={styles["search-list-item"]}>
      <img src={props.item.image_url} alt={props.item.name} />
      <div className={styles["search-list-item-mid"]}>
        <h2>{props.item.name}</h2>
        <p>{props.item.distance}&nbps;from center</p>
        <p className={styles.tag}>{props.item.tag}</p>
        <p className={styles.description}>{props.item.description}</p>
        <p>{props.item.type}</p>
        <div
          className={`${styles.free_cancel}${" "}${
            !props.item.free_cancel ? styles.hide : ""
          }`}
        >
          <p className={styles.free_cancel_first_p}>Free cancellation</p>
          <p>You can cancel later, so lock in this great price today!</p>
        </div>
      </div>
      <div className={styles["search-list-item-right"]}>
        <p className={styles.rate}>
          <span>{props.item.rate_text}</span>
          <span className={styles["rate-number"]}>{props.item.rate}</span>
        </p>
        <div className={styles.price}>
          <p className={styles["price-dolla"]}>${props.item.price}</p>
          <p className={styles["price-taxes"]}>Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
