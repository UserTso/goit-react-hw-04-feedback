import PropTypes from 'prop-types';
import {Text} from './Statistics.styled';



export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total: {total}</Text>
        <Text>PositivePercentage: {positivePercentage}%</Text>
        </>
    )
}

Statistics.ropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}



