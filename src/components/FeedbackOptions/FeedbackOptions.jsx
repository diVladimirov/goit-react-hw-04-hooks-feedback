import React from 'react';
import { FeedbackOptionsWrapper, FeedbackOptionsButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
