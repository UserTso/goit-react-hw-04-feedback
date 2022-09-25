import React from 'react';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import {Notification} from '../Notification';
import {Wrapper} from './App.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {

    this.setState(prevState => {
      return { [event]: prevState[event] + 1 };
    });
  };

  sumTotal = () => {
    // const {good, neutral, bad} = this.state;
    const arrayValue = Object.values(this.state);
    const totalFeedBack = arrayValue.reduce((acc, value) => {return acc + value} ,0)
    return totalFeedBack;

  }

  totalPositivePercentage = () => {
    const {good} = this.state;
    return Math.round(good/this.sumTotal()*100)
  }

  render() {
    const {good, neutral, bad} = this.state;
    const arrayOptions = Object.keys(this.state);
    // console.log(arrayOptions);
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={arrayOptions}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.sumTotal() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total= {this.sumTotal()} positivePercentage={this.totalPositivePercentage()} />) : <Notification message="There is no feedback"/>}
        </Section>

      </Wrapper>
    );
  }
}
