import styles from './firstTask.module.css';

const FirstTask = () => {
  return (
    <container className={styles.mainContainer}>
      <div className={styles.feedbackBlock}>
        <h2>Please leave feedback</h2>
        <button className={styles.ratingButton}>Good</button>
        <button className={styles.ratingButton}>Neutral</button>
        <button className={styles.ratingButton}>Bad</button>
      </div>
      <div>СТАТИСТИКА</div>
    </container>
  );
};

export default FirstTask;
