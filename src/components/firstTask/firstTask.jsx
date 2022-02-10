import styles from './firstTask.module.css';

const FirstTask = () => {
  return (
    <container className={styles.mainContainer}>
      <div>
        <h2>Please оставьте otzыв</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Not good</button>
      </div>
      <div>СТАТИСТИКА</div>
    </container>
  );
};

export default FirstTask;
