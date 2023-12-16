import css from './Feedback.module.css';
const Feedbackoptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      <button
        className={css.button}
        onClick={() => onLeaveFeedback(options[0])}
      >
        {options[0]}
      </button>
      <button
        className={css.button}
        onClick={() => onLeaveFeedback(options[1])}
      >
        {options[1]}
      </button>
      <button
        className={css.button}
        onClick={() => onLeaveFeedback(options[2])}
      >
        {options[2]}
      </button>
    </div>
  );
};

export { Feedbackoptions };
