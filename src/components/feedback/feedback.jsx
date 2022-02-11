import { Component } from 'react';

import styles from './feedback.module.css';
// import PropTypes from "prop-types";

class Feedback extends Component {
  state = {
    good: 3,
    neutral: 1,
    bad: 13,
  };

  feedbackBtn(property) {
    this.setState(prevState => {
      return { [property]: prevState[property] + 1 };
    });
  }

  render() {
    return (
      <section className={styles.mainContainer}>
        <div className={styles.feedbackBlock}>
          <h2>Please leave feedback</h2>
          <button className={styles.ratingButton} onClick={() => this.feedbackBtn("good")}>
            Good
          </button>
          <button className={styles.ratingButton} onClick={() => this.feedbackBtn("neutral")}>Neutral</button>
          <button className={styles.ratingButton} onClick={() => this.feedbackBtn("bad")}>Bad</button>
        </div>
        <div className={styles.statBlock}>
          <h3>STATISTICS</h3>
          <div className={styles.ratingBlock}>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
          </div>
        </div>
      </section>
    );
  }
}
// FriendList.defaultProps = {
//   friends: [],
// };

// Feedback.PropTypes = {
//   state: PropTypes.arrayOf(
//    PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,}
//   ))
// }

export default Feedback;
