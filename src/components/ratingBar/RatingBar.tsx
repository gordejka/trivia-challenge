import React, { FC, useMemo } from 'react';
import iconPinkStar from '../../assets/images/iconPinkStar.svg';
import iconGrayStar from '../../assets/images/iconGreyStar.svg';
import classes from './ratingBar.module.scss';

interface Props {
  correctAnswers: number;
  totalQuestions: number;
}

const RatingBar: FC<Props> = ({ correctAnswers, totalQuestions }) => {
  const percentageResult = useMemo(() => {
    return Math.round((correctAnswers / totalQuestions) * 10);
  }, [correctAnswers, totalQuestions]);

  const starsList = useMemo(() => {
    const starsListArray = [];
    for (let i = 0; i < 10; i += 1) {
      if (percentageResult > i) {
        starsListArray.push(<img src={iconPinkStar} alt='Star' key={i} />);
      } else {
        starsListArray.push(<img src={iconGrayStar} alt='Star' key={i} />);
      }
    }
    return starsListArray;
  }, [percentageResult]);

  return <div className={classes.wrapper}>{starsList}</div>;
};

export default RatingBar;
