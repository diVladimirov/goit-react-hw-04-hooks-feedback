import { GlobalStyle } from '../constants/GlobalStyle';
import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handelIncrement = event => {

  //   this.setState({ [event.target.name]: Number(event.target.value) + 1 });
  // };

  handelIncrement = event => {
    this.setState(prevState => ({
      [event.target.value]: prevState[event.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / (this.countTotalFeedback() - this.state.neutral)) * 100,
    );
    return positivePercentage ? positivePercentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <GlobalStyle />

        <Section title="" />
        <FeedbackOptions options={options} onLeaveFeedback={this.handelIncrement} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          onCountTotalFeedBack={this.countTotalFeedback()}
          onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
