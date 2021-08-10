import React, { FC, InputHTMLAttributes } from 'react';
import classes from './input.module.scss';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  return <input className={classes.customInput} {...rest} />;
};

export default Input;
