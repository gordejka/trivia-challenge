import React, { FC, SelectHTMLAttributes, useMemo } from 'react';
import classes from './select.module.scss';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  variants: Array<string>;
}

const Select: FC<Props> = ({ variants, ...rest }) => {
  const variantsList = useMemo(() => {
    return variants.map(variant => {
      return (
        <option value={variant} key={variant}>
          {variant}
        </option>
      );
    });
  }, [variants]);

  return (
    <select className={classes.customSelect} {...rest}>
      {variantsList}
    </select>
  );
};

export default Select;
