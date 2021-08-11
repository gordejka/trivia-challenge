import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import WrapperType from '../../enums/WrapperType';
import logo from '../../assets/images/logo.svg';
import Container from '../../components/common/container/Container';
import classes from './startPage.module.scss';
import StartForm from '../../components/startForm/StartForm';
import { StartFormData } from '../../interfaces/StartFormData';
import PageUrl from '../../enums/PageUrl';
import setFormData from '../../store/startForm/startFormActions';
import { fetchQuestions } from '../../store/quiz/quizActions';
import numbersValidator from '../../util/numbersValidator';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { RootState } from '../../interfaces/RootState';

const StartPage: FC = () => {
  const dispatch = useDispatch();
  const formData: StartFormData = useSelector((state: RootState) => state.startForm.formData);
  const difficultyVariants = useSelector((state: RootState) => state.startForm.difficultyVariants);
  const questionsCount = useSelector((state: RootState) => state.quiz.questionsCount);
  const { push: historyPush } = useHistory();

  useEffect(() => {
    if (questionsCount) {
      historyPush(PageUrl.QUIZ_PAGE);
      dispatch(setFormData({ ...formData, amount: '', difficulty: 'easy' }));
    }
  }, [dispatch, historyPush, questionsCount]);

  const formSubmitHandler = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      dispatch(fetchQuestions(formData.amount, formData.difficulty));
    },
    [dispatch, formData.amount, formData.difficulty],
  );

  const inputChangeHandler = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      dispatch(setFormData({ ...formData, amount: numbersValidator(event.currentTarget.value) }));
    },
    [dispatch, formData],
  );

  const selectChangeHandler = useCallback(
    (event: React.FormEvent<HTMLSelectElement>) => {
      dispatch(setFormData({ ...formData, difficulty: event.currentTarget.value }));
    },
    [dispatch, formData],
  );

  return (
    <PageWrapper wrapperType={WrapperType.START_PAGE}>
      <Container>
        <ContentWrapper>
          <div>
            <div className={classes.title}>Welcome to the</div>
            <div className={classes.logoWrapper}>
              <img src={logo} alt='Trivia' className={classes.logo} />
            </div>
            <StartForm
              formData={formData}
              formSubmitHandler={formSubmitHandler}
              selectChangeHandler={selectChangeHandler}
              inputChangeHandler={inputChangeHandler}
              selectOptions={difficultyVariants}
            />
          </div>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};

export default StartPage;
