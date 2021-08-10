import React, { FC } from 'react';
import classes from './container.module.scss';

const Container: FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
