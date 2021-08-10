import React, { FC, useMemo } from 'react';
import classes from './progressBar.module.scss';

interface Props {
  questionsCount: number;
  answeredQuestionsCount: number;
}

const ProgressBar: FC<Props> = ({ questionsCount, answeredQuestionsCount }) => {
  const completedQuestionsCount = useMemo(() => {
    return (answeredQuestionsCount / questionsCount) * 100;
  }, [answeredQuestionsCount, questionsCount]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.progressBar}>
        <div className={classes.completed} style={{ width: `${completedQuestionsCount}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
