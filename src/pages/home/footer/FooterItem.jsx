import styles from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <div className={styles["footer-item"]}>
      {props.item.col_values.map((x) => {
        return <p key={x}>{x}</p>;
      })}
    </div>
  );
};

export default FooterItem;
