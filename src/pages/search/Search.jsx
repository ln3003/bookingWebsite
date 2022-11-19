import styles from "./Search.module.css";
import Navbar from "../home/header_and_navbar/Navbar";
import RegisterForm from "../home/register_form/RegisterForm";
import Footer from "../home/footer/Footer";
import SearchPopup from "./search_popup/SearchPopup";
import SearchList from "./search_list/SearchList";
import Header from "../home/header_and_navbar/Header";

const Search = () => {
  return (
    <div>
      <div className={styles.backgroud}>
        <div className={styles.center}>
          <Navbar />
          <Header />
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.search}>
          <div className={styles["search-popup"]}>
            <SearchPopup />
          </div>
          <div className={styles["search-list"]}>
            <SearchList />
          </div>
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
  );
};

export default Search;
