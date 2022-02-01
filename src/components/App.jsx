import { GlobalStyle } from '../constants/GlobalStyle';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notifications from './Notifications/Notifications';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({ good, neutral, bad });

  const handelIncrement = event => {
    const { value } = event.target;

    switch (value) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / (countTotalFeedback() - neutral)) * 100);
    return positivePercentage ? positivePercentage : 0;
  };

  return (
    <>
      <GlobalStyle />
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handelIncrement} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onCountTotalFeedBack={countTotalFeedback()}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications message={'There is no feedback'} />
        )}
      </Section>
      ;
    </>
  );
};

export default App;
