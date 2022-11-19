import styles from "./Home.module.css";
import Navbar from "./header_and_navbar/Navbar";
import Header from "./header_and_navbar/Header";
import HotelList from "./hotel_list/HotelList";
import RegisterForm from "./register_form/RegisterForm";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <div className={styles.backgroud}>
        <div className={styles.center}>
          <Navbar />
          <Header />
        </div>
      </div>
      <div className={styles.center}>
        <HotelList />
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
  );
};

export default Home;
