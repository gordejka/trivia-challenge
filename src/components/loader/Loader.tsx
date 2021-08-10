import React, { FC } from 'react';
import classes from './loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader} />
    </div>
  );
};

export default Loader;
