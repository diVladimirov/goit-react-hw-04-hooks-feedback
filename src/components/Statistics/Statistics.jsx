import React from 'react';
import { StatisticsWrapper, StatisticsInfo } from './Statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountTotalFeedBack: PropTypes.func,
  onCountPositiveFeedbackPercentage: PropTypes.func,
};
