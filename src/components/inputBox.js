import styles from "./inputBox.module.css"

const InputBox = () => {
    return (
      <div
        className={styles.box}>
  
        <input
          type="text"
          placeholder="you@youremail.com"
          name=" "
          className={styles.inputbox}/>
  
        <button
          className={styles.button}>
          Sign Me Up
        </button>
      </div>
    );
  };


export default InputBox