import React, { FC, useMemo } from 'react';
import classes from './QuestionResultCard.module.scss';
import iconCheck from '../../assets/images/iconCheck.svg';
import iconTimes from '../../assets/images/iconTimes.svg';
import classNames from '../../util/classNames';

interface Props {
  question: string;
  answer: string;
  correctAnswer: string;
}

const QuestionResultCard: FC<Props> = ({ question, answer, correctAnswer }) => {
  const cardClassName = useMemo(() => {
    if (answer !== correctAnswer) {
      return classNames([classes.wrapper, classes.incorrect]);
    }
    return classes.wrapper;
  }, [answer, correctAnswer]);

  const icon = useMemo(() => {
    if (answer !== correctAnswer) {
      return iconTimes;
    }
    return iconCheck;
  }, [answer, correctAnswer]);

  return (
    <div className={cardClassName}>
      <div>{question}</div>
      <img src={icon} alt='Result' />
    </div>
  );
};

export default QuestionResultCard;
