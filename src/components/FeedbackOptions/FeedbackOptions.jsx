import React from 'react';
import { FeedbackOptionsWrapper, FeedbackOptionsButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsWrapper>
    {options.map(option => (
      <FeedbackOptionsButton type="button" key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </FeedbackOptionsButton>
    ))}
  </FeedbackOptionsWrapper>
);

export default FeedbackOptions;
