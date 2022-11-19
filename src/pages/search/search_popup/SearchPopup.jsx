import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  const dateValue = (e) => {
    return e;
  };
  return (
    <form className={styles["search-popup"]}>
      <h2>Search</h2>
      <label className={styles["search-popup-label"]}>Destination</label>
      <input className={styles["search-popup-input"]} />
      <label className={styles["search-popup-label"]}>Check-in Date</label>
      <input
        className={styles["search-popup-input"]}
        value="06/24/2022 to 06/24/2022"
        onChange={dateValue}
      />
      <label className={styles["search-popup-label"]}>Options</label>
      <div className={styles["options-container"]}>
        <div className={styles["options-item"]}>
          <label>Min price per night</label>
          <input type="text" />
        </div>
        <div className={styles["options-item"]}>
          <label>Max price per night</label>
          <input />
        </div>
        <div className={styles["options-item"]}>
          <label>Adult</label>
          <input value={"1"} onChange={dateValue} />
        </div>
        <div className={styles["options-item"]}>
          <label>Children</label>
          <input value={"0"} onChange={dateValue} />
        </div>
        <div className={styles["options-item"]}>
          <label>Room</label>
          <input value={"1"} onChange={dateValue} />
        </div>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchPopup;
