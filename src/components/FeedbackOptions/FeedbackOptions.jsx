import PropTypes from 'prop-types';
import {ButtonBox, Button} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
//   console.log(options);
  return (
    <ButtonBox>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </ButtonBox>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
}