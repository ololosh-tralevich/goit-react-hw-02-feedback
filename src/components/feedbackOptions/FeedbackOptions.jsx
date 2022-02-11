import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const partOfCode = options.map(option => (
    <button
      key={option}
      name={option}
      className={styles.ratingButton}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));

  return (
    <div className={styles.feedbackBlock}>
      {partOfCode}
    </div>
  );
};

export default FeedbackOptions;
