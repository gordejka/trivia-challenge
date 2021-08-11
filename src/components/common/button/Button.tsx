import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';
import classNames from '../../../util/classNames';
import classes from './button.module.scss';
import ButtonStyle from '../../../enums/ButtonStyle';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: ButtonStyle;
  isSubmitButton?: boolean;
}

const Button: FC<Props> = ({ isSubmitButton, children, buttonStyle, ...rest }) => {
  const buttonClassName = useMemo(() => {
    if (buttonStyle === ButtonStyle.GRADIENT) {
      return classNames([classes.customButton, classes.gradient]);
    }
    if (buttonStyle === ButtonStyle.OUTLINED) {
      return classNames([classes.customButton, classes.outlined]);
    }
    return classes.customButton;
  }, [buttonStyle]);

  return (
    <button type={isSubmitButton ? 'submit' : 'button'} className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
