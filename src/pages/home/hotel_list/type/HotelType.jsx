import styles from "./HotelType.module.css";
import HotelTypeItem from "./HotelTypeItem";

const hotelTypeArray = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const HotelType = () => {
  return (
    <div className={styles["hotel-type-container"]}>
      <h3>Browse by property type</h3>
      <div className={styles["hotel-type-list"]}>
        {
          hotelTypeArray.map((x)=>{
          return <HotelTypeItem key={x.name} item={x} />
        })
        }
      </div>
    </div>
  );
};

export default HotelType;
