import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export const FeedbackOptions = ({data:{setCommentsGood, setCommentsNeutral, setCommentsBad}}) => {
  const FeedbackPressButton = (evt) =>{
    if (evt.target.type !== 'button') return;
    switch (evt.target.value) {
      case 'good': setCommentsGood( prevState => prevState +1);
      break;
      case 'neutral': setCommentsNeutral( prevState => prevState +1);;
      break;
      case 'bad': setCommentsBad( prevState => prevState +1);;
      break;
      default: console.log('default');
    }
  }
  return (
    <div>
      <div className={css.grade} onClick={FeedbackPressButton}>
        <button className={css.btn} type="button" value="good">
          Good
        </button>

        <button className={css.btn} type="button" value="neutral">
          Neutral
        </button>

        <button className={css.btn} type="button" value="bad">
          Bad
        </button>
      </div>
    </div>
  );
};

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func,
};
