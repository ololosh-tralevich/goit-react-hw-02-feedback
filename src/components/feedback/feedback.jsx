import styles from './feedback.module.css';

const Feedback = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.feedbackBlock}>
        <h2>Please leave feedback</h2>
        <button className={styles.ratingButton}>Good</button>
        <button className={styles.ratingButton}>Neutral</button>
        <button className={styles.ratingButton}>Bad</button>
      </div>
      <div>
        <h3>STATISTICS</h3>
      </div>
    </section>
  );
};

export default Feedback;

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }
