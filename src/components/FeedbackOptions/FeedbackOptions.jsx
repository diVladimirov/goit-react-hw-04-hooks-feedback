import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button type="button" key={option} value={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
