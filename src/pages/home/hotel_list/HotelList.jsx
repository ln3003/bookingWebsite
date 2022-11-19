import City from "./city/City";
import HotelType from "./type/HotelType";
import GuestsLove from "./love/GuestsLove";
import styles from "./HotelList.module.css";

const HotelList = () => {
  return (
    <div className={styles["hotel-list"]}>
      <City />
      <HotelType />
      <GuestsLove />
    </div>
  );
};
export default HotelList;
