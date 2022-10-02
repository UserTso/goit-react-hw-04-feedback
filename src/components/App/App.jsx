import {useState} from 'react';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import {Notification} from '../Notification';
import {Wrapper} from './App.styled';

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    
    switch(event) {
case 'good':
  setGood(prevState => prevState + 1);
  break;
  case 'neutral':
    setNeutral(prevState => prevState + 1);
  break;
  case 'bad':
    setBad(prevState => prevState + 1);;
  break;
  default:
    return;
    }
      };

      const sumTotal = () => {     
            return good + neutral + bad;
          }
          const totalPositivePercentage = () => {
            return Math.round(good/sumTotal()*100)
          }

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {sumTotal() ? (<Statistics good={good} neutral={neutral} bad={bad} total= {sumTotal()} positivePercentage={totalPositivePercentage()} />) : <Notification message="There is no feedback"/>}
      </Section>

    </Wrapper>
  );
} 