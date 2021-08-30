import React, { Component } from "react";
import PageWrap from "./components/PageWrap/PageWrap";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  getOptionsValues = () => Object.keys(this.state);

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedbackPercentage = Math.round(
      good / (this.countTotalFeedback() * 0.01)
    );
    return positiveFeedbackPercentage || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <PageWrap title="Feedback from visitors to Café Expresso">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.getOptionsValues()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </PageWrap>
    );
  }
}

export default App;
