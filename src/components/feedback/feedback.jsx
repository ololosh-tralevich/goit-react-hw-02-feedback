import { Component } from 'react';

import Statistics from 'components/statistics/Statistics';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';

import styles from './feedback.module.css';
// import PropTypes from "prop-types";

let totalRating = 0;
let positivePerc = 100;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prevState => {
      totalRating = prevState.good + prevState.neutral + prevState.bad;
      return totalRating;
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      positivePerc = Math.round((prevState.good / totalRating) * 100);
      return positivePerc;
    });
  }

  render() {
    return (
      <section className={styles.mainContainer}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrement}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalRating}
          positivePercentage={positivePerc}
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
