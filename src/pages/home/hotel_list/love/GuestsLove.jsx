import styles from "./GuestsLove.module.css";
import GuestsLoveItem from "./GuestsLoveItem";

const guestsLoveArray = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const GuestsLove = () => {
  return (
    <div className={styles["guests-love-container"]}>
      <h3>Homes guests love</h3>
      <div className={styles["guests-love-list"]}>
        {
          guestsLoveArray.map((x)=>{
            return <GuestsLoveItem key={x.name} item={x}/>
          })
        }
      </div>
    </div>
  );
};

export default GuestsLove;
