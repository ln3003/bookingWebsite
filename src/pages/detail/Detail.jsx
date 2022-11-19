import styles from "./Detail.module.css";
import Navbar from "../home/header_and_navbar/Navbar";
import RegisterForm from "../home/register_form/RegisterForm";
import Footer from "../home/footer/Footer";
import Header from "../home/header_and_navbar/Header";
import DetailInformation from "./detail_information/DetailInformation";
import DetailGallery from "./detail_gallery/DetailGallery";
import DetailText from "./detail_text/DetailText";

const detailObject = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  return (
    <div>
      <div>
        <div className={styles.backgroud}>
          <div className={styles.center}>
            <Navbar />
            <Header />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles["detail-container"]}>
            <DetailInformation hotel={detailObject} />
            <DetailGallery hotel={detailObject} />
            <DetailText hotel={detailObject} />
          </div>
        </div>
        <div className={styles.backgroud}>
          <div className={styles.center}>
            <RegisterForm />
          </div>
        </div>
        <div className={styles.center}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
