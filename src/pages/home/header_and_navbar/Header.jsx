import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
//=====ADD ICON TO LIBRARY OF FONT AWESOME========
library.add(faBed, faCalendar, faFemale);
const searchHandle = () => {
  window.location.replace("/search");
};
//===========RANGE OBJECT==========
const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Header = () => {
  //========SET START DAY AND END DAY=======
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    selectionRange.startDate = ranges.selection.startDate;
    selectionRange.endDate = ranges.selection.endDate;
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  ///======SHOW DATE RANGE WHEN CLICK ON INPUT=======
  const [day, setDay] = useState(false);
  const dayHandle = () => {
    day ? setDay(false) : setDay(true);
  };
  return (
    <div className={styles["header-container"]}>
      <h1>A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant saving of 10% or more
        with a free account
      </p>
      <button className={styles.btn}>Sign in / Register</button>
      <div className={styles["header-search-div"]}>
        <div>
          <FontAwesomeIcon icon={["fas", "bed"]} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div>
          <FontAwesomeIcon icon={["fas", "calendar"]} />
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            onClick={dayHandle}
            readOnly
            value={`${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}
            placeholder={`${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}
          />
          <div className={day ? styles.show : styles.hide}>
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              onChange={handleSelect}
              ranges={[selectionRange]}
            />
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={["fas", "female"]} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="1 adult - 0 children - 1 room" />
        </div>
        <button className={styles.btn} onClick={searchHandle}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
