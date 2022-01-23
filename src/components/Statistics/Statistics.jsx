import React from 'react';
import { StatisticsWrapper, StatisticsInfo } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedBack,
  onCountPositiveFeedbackPercentage,
}) => (
  <StatisticsWrapper>
    <StatisticsInfo>
      Good:<span>{good}</span>
    </StatisticsInfo>
    <StatisticsInfo>
      Neutral:<span>{neutral}</span>
    </StatisticsInfo>
    <StatisticsInfo>
      Bad:<span>{bad}</span>
    </StatisticsInfo>
    <StatisticsInfo>
      Total:<span>{onCountTotalFeedBack}</span>
    </StatisticsInfo>
    <StatisticsInfo>
      Positive feedback:<span>{onCountPositiveFeedbackPercentage} %</span>
    </StatisticsInfo>
  </StatisticsWrapper>
);

export default Statistics;
