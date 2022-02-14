import { Component } from 'react';

import Section from 'components/section/Section';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';

import styles from './feedback.module.css';

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
      <div className={styles.mainContainer}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          <Notification
            message={'There is no feedback'}
            totalRating={totalRating}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalRating}
            positivePercentage={positivePerc}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
