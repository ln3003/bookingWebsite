import styles from "./DetailGallery.module.css";

const DetailGallery = (props) => {
  return (
    <div className={styles["detail-gallery"]}>
      {props.hotel.photos.map((x) => {
        return <img key={x} src={x} alt={props.name} />;
      })}
    </div>
  );
};

export default DetailGallery;
