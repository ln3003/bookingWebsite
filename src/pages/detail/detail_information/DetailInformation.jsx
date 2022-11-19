import styles from "./DetailInformation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot);

const DetailInformation = (props) => {
  return (
    <div className={styles["detail-information"]}>
      <div className={styles["detail-information-left"]}>
        <h2>{props.hotel.name}</h2>
        <div>
          <FontAwesomeIcon icon={["fas", "location-dot"]} />
          &nbsp;&nbsp;&nbsp;
          <p className={styles.address}>{props.hotel.address}</p>
        </div>
        <p className={styles.distance}>{props.hotel.distance}</p>
        <p className={styles.price}>{props.hotel.price}</p>
      </div>
      <button>Reserve or Book Now!</button>
    </div>
  );
};

export default DetailInformation;
