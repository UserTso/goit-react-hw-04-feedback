import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
//   console.log(options);
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
}