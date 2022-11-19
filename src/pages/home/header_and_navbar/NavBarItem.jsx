import styles from "./NavBarItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPlane,
  faCar,
  faTaxi,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
//=====ADD ICON TO LIBRARY OF FONT AWESOME========
library.add(faHome, faPlane, faCar, faTaxi, faBed);
const NavBarItem = (props) => {
  return (
    <li
      className={`${styles["navbar-item"]}${" "}${
        props.item.active ? styles.active : ""
      }`}
    >
      <FontAwesomeIcon icon={["fas", props.item.icon]} /> &nbsp;
      {props.item.type}
    </li>
  );
};

export default NavBarItem;
