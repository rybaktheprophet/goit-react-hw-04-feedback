import { useState , useEffect } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [commentsGood, setCommentsGood] = useState(0);
  const [commentsNeutral, setCommentsNeutral] = useState(0);
  const [commentsBad, setCommentsBad] = useState(0);
  const [commentsTotal, setCommentsTotal] = useState(0);
  const [positiveCommentsPercentage, setPositiveCommentsPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(0);
  
useEffect(()=>{
  setCommentsTotal( commentsGood + commentsNeutral + commentsBad);
  
  if ( commentsGood || commentsNeutral || commentsBad) setIsVisible(1);
}, [commentsGood, commentsNeutral, commentsBad])

useEffect(()=>{
if (commentsGood) setPositiveCommentsPercentage(  Math.round((commentsGood * 100) / commentsTotal)  )

}, [commentsGood , commentsTotal])

  return(
          <div className={css.wrap}>
        <Section
          title={'Please leave feedback'}
           children={<FeedbackOptions data ={{setCommentsGood, setCommentsNeutral, setCommentsBad}}/>}
        />
        <Section
          title={'Statistics'}
          children={
            isVisible ? (
              <Statistics
                good={commentsGood}
                neutral={commentsNeutral}
                bad={commentsBad}
                total={commentsTotal}
                positivePercentage={positiveCommentsPercentage}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )
          }
        />
      </div>
  )
} 
