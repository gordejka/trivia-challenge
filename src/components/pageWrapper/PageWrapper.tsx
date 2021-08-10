import React, { FC, useMemo } from 'react';
import WrapperType from '../../enums/WrapperType';
import classes from './pageWrapper.module.scss';

interface Props {
  wrapperType: WrapperType;
}

const PageWrapper: FC<Props> = ({ wrapperType, children }) => {
  const backgroundType = useMemo(() => {
    if (wrapperType === WrapperType.DARK) {
      return classes.dark;
    }
    return classes.light;
  }, [wrapperType]);

  return (
    <div className={backgroundType}>
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
