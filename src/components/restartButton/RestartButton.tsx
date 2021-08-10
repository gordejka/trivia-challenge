import React, { FC } from 'react';
import iconTimesWhite from '../../assets/images/iconTimesWhite.svg';
import iconTimes from '../../assets/images/iconTimes.svg';
import classes from './restartButton.module.scss';

interface Props {
  isDark?: boolean;
  action: () => void;
}

const RestartButton: FC<Props> = ({ action, isDark }) => {
  return (
    <div className={classes.wrapper}>
      <button type='button' onClick={action}>
        <img src={isDark ? iconTimes : iconTimesWhite} alt='Try again' />
      </button>
    </div>
  );
};

export default RestartButton;
