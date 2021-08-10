import React, { FC, useMemo } from 'react';
import cn from 'classnames';
import classes from './contentWrapper.module.scss';

interface Props {
  alignItemsCenter?: boolean;
}

const ContentWrapper: FC<Props> = ({ children, alignItemsCenter }) => {
  const contentWrapperClassNames = useMemo(() => {
    if (alignItemsCenter) {
      return cn(classes.wrapper, classes.centered);
    }
    return classes.wrapper;
  }, [alignItemsCenter]);
  return <div className={contentWrapperClassNames}>{children}</div>;
};

export default ContentWrapper;
