import styles from "./index.module.css";

const ButtonComponent = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonComponent;
