import React, { FC } from 'react';
import classes from './label.module.scss';

interface Props {
  imagePath: string;
  imageAlt: string;
}

const Label: FC<Props> = ({ imagePath, imageAlt, children }) => {
  return (
    <div className={classes.wrapper}>
      <img src={imagePath} alt={imageAlt} />
      <div>{children}</div>
    </div>
  );
};

export default Label;
