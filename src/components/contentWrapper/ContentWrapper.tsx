import React, { FC } from 'react';
import classes from './contentWrapper.module.scss';

const ContentWrapper: FC = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default ContentWrapper;
