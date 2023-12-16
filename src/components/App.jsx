import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Feedbackoptions } from './Feedback/Feedbackoptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <Feedbackoptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </div>
    );
  }
  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
}
