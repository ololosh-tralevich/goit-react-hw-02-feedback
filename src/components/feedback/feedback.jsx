import { Component } from 'react';

import Statistics from 'components/statistics/Statistics';

import styles from './feedback.module.css';
// import PropTypes from "prop-types";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePerc: 0,
  };

  feedbackBtn(property) {
    this.setState(prevState => {
      return { [property]: prevState[property] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback() {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      return {
        positivePerc: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  }

  render() {
    return (
      <section className={styles.mainContainer}>
        <div className={styles.feedbackBlock}>
          <h2>Please leave feedback</h2>
          <button
            className={styles.ratingButton}
            onClick={() => this.feedbackBtn('good')}
          >
            Good
          </button>
          <button
            className={styles.ratingButton}
            onClick={() => this.feedbackBtn('neutral')}
          >
            Neutral
          </button>
          <button
            className={styles.ratingButton}
            onClick={() => this.feedbackBtn('bad')}
          >
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePerc}
        />
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
