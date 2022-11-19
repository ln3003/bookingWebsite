import styles from "./Navbar.module.css";
import NavBarItem from "./NavBarItem";

const navbarArray = [
  {
    type: "Stays",
    icon: "bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "taxi",
    active: false,
  },
];

const homeHandle = () => {
  window.location.replace("/");
};

const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["title-button-div"]}>
        <p onClick={homeHandle}>Booking Website</p>
        <button>Register</button>
        <button>Login</button>
      </div>
      <div className={styles["navbar-item-container"]}>
        <ul>
          {navbarArray.map((x) => {
            return <NavBarItem key={x.type} item={x} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
