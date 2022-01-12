import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedBack,
  onCountPositiveFeedbackPercentage,
}) => (
  <div>
    <p>
      Good:<span>{good}</span>
    </p>
    <p>
      Neutral:<span>{neutral}</span>
    </p>
    <p>
      Bad:<span>{bad}</span>
    </p>
    <p>
      Total:<span>{onCountTotalFeedBack}</span>
    </p>
    <p>
      Positive feedback:<span>{onCountPositiveFeedbackPercentage}%</span>
    </p>
  </div>
);

export default Statistics;
