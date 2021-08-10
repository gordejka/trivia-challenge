import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import classes from './score.module.scss';
import toTwoDigitNumber from '../../util/toTwoDigitNumber';
import WrapperType from '../../enums/WrapperType';

interface Props {
  firstValue: number;
  secondValue: number;
  wrapperType: WrapperType;
}

const Score: FC<Props> = ({ firstValue, secondValue, wrapperType }) => {
  const secondValueClassName = useMemo(() => {
    if (wrapperType === WrapperType.LIGHT) {
      return cn(classes.secondValue, classes.light);
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
