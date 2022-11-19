import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <div className={styles["register-form-container"]}>
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals for you</p>
      <form className={styles["register-form"]}>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default RegisterForm;
