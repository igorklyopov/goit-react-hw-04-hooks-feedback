import React, { useState } from "react";
import PageWrap from "./components/PageWrap/PageWrap";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTypes = ["good", "neutral", "bad"];

  const onLeaveFeedback = (feedbackType) => {
    if (feedbackType === "good") return setGood((good) => good + 1);
    if (feedbackType === "neutral") return setNeutral((neutral) => neutral + 1);
    if (feedbackType === "bad") return setBad((bad) => bad + 1);
    return console.error("unknown feedbackType in onLeaveFeedback");
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = Math.round(
      good / (countTotalFeedback() * 0.01)
    );
    return positiveFeedbackPercentage || 0;
  };

  return (
    <PageWrap title="Feedback from visitors to Café Expresso">
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </PageWrap>
  );
}

export default App;
