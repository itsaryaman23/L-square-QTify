import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({handleCross}) => {
  return (
    <>
      <div className={styles.feedBack}>
        <div className={styles.feed}>
            <p id={styles.close} onClick={handleCross}>x</p>
          <form>
            <div className={styles.form}>
              <h6>Feedback</h6>

              <input
                placeholder="Full Name"
                className={styles.inp}
                type="text"
              />

              <input placeholder="Email" className={styles.inp} type="email" />

              <input placeholder="Subject" className={styles.inp} type="text" />

              <textarea
                placeholder="Description"
                className={styles.inp}
                id={styles.desc}
              ></textarea>

              <div>
                <button type="submit" id={styles.sub}>
                  Submit Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
