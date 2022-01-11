import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handelIncrement = event => {
    console.log('click');
    console.log(event);
    this.setState({ good: 1 });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handelIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handelIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handelIncrement}>
            Bad
          </button>
        </div>
        <h2>Statictics</h2>
        <p>
          Good:<span>{good}</span>
        </p>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
        <p>
          Bad:<span>{bad}</span>
        </p>
      </div>
    );
  }
}

export default Feedback;
