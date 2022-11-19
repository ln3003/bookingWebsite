import styles from "./DetailText.module.css";

const DetailText = (props) => {
  return (
    <div className={styles["detail-text"]}>
      <div className={styles["detail-text-left"]}>
        <h2>{props.hotel.title}</h2>
        <p>{props.hotel.description}</p>
      </div>
      <div className={styles["detail-text-right"]}>
        <h3>Perfect for a 9-night stay!</h3>
        <p>
          Located in the real heart of Krakow, this property has an excellent{" "}
          location score of 9.8!
        </p>
        <p className={styles.price}>
          <span>${props.hotel.nine_night_price}</span>
          {" (9 nights)"}
        </p>
        <button>Reserve or Book Now!</button>
      </div>
    </div>
  );
};

export default DetailText;
