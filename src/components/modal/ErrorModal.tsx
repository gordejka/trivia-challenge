import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './errorModal.module.scss';
import Button from '../common/button/Button';
import ButtonStyle from '../../enums/ButtonStyle';
import { fixError } from '../../store/quiz/quizActions';
import { RootState } from '../../interfaces/RootState';

const ErrorModal: FC = () => {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state: RootState) => state.quiz);
  const errorModalAction = useCallback(() => dispatch(fixError()), [dispatch]);

  return useMemo(() => {
    if (hasError) {
      return (
        <div className={classes.wrapper}>
          <div className={classes.modal}>
            <div className={classes.title}>An error has occurred</div>
            <Button buttonStyle={ButtonStyle.DARK} onClick={errorModalAction}>
              Try again
            </Button>
          </div>
        </div>
      );
    }
    return <></>;
  }, [errorModalAction, hasError]);
};

export default ErrorModal;
