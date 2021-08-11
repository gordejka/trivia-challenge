import React, { FC, useMemo } from 'react';
import classes from './score.module.scss';
import toTwoDigitNumber from '../../util/toTwoDigitNumber';
import WrapperType from '../../enums/WrapperType';
import classNames from '../../util/classNames';

interface Props {
  firstValue: number;
  secondValue: number;
  wrapperType: WrapperType;
}

const Score: FC<Props> = ({ firstValue, secondValue, wrapperType }) => {
  const secondValueClassName = useMemo(() => {
    if (wrapperType === WrapperType.QUIZ_PAGE) {
      return classNames([classes.secondValue, classes.light]);
    }
    return classes.secondValue;
  }, [wrapperType]);

  return (
    <div className={classes.wrapper}>
      <span className={classes.firstValue}>{toTwoDigitNumber(firstValue)}</span>
      <span className={secondValueClassName}>/{toTwoDigitNumber(secondValue)}</span>
    </div>
  );
};

export default Score;
