import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import WrapperType from '../../enums/WrapperType';
import Container from '../../components/common/container/Container';
import classes from './quizPage.module.scss';
import ProgressBar from '../../components/progressBar/ProgressBar';
import Button from '../../components/common/button/Button';
import { clearStore, setAnsweredQuestionsCount, setCurrentQuestion, setQuestionAnswer } from '../../store/quiz/quizActions';
import PageUrl from '../../enums/PageUrl';
import ButtonStyle from '../../enums/ButtonStyle';
import AnswerVariant from '../../enums/AnswerVariant';
import Score from '../../components/score/Score';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { RootState } from '../../interfaces/RootState';
import RestartButton from '../../components/restartButton/RestartButton';

const QuizPage: FC = () => {
  const dispatch = useDispatch();
  const { push: historyPush } = useHistory();
  const { questionsCount, answeredQuestionsCount, currentQuestion } = useSelector((state: RootState) => state.quiz);

  const buttonClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (currentQuestion) {
        dispatch(setAnsweredQuestionsCount(answeredQuestionsCount + 1));
        dispatch(setQuestionAnswer(currentQuestion.id, event.currentTarget.value));
        dispatch(setCurrentQuestion(answeredQuestionsCount));
      }
      if (answeredQuestionsCount === questionsCount) {
        historyPush(PageUrl.RESUlTS_PAGE);
      }
    },
    [answeredQuestionsCount, currentQuestion, dispatch, historyPush, questionsCount],
  );

  const tryAgain = useCallback(() => {
    dispatch(clearStore());
    historyPush(PageUrl.START_PAGE);
  }, [dispatch, historyPush]);

  return (
    <PageWrapper wrapperType={WrapperType.QUIZ_PAGE}>
      <Container>
        <ContentWrapper>
          <div className={classes.wrapper}>
            <div className={classes.categoryWrapper}>
              <div>{currentQuestion && currentQuestion.category}</div>
            </div>
            <div className={classes.levelWrapper}>level 1</div>
            <div className={classes.scoreWrapper}>
              <Score secondValue={questionsCount} firstValue={answeredQuestionsCount} wrapperType={WrapperType.START_PAGE} />
            </div>
            <div className={classes.progressBarWrapper}>
              <ProgressBar questionsCount={questionsCount} answeredQuestionsCount={answeredQuestionsCount} />
            </div>
            <div className={classes.questionWrapper}>
              <div>{currentQuestion && currentQuestion.question}</div>
            </div>
            <div className={classes.buttonWrapper}>
              <Button buttonStyle={ButtonStyle.DARK} value={AnswerVariant.TRUE} onClick={buttonClickHandler}>
                true
              </Button>
            </div>
            <div className={classes.buttonWrapper}>
              <Button buttonStyle={ButtonStyle.OUTLINED} value={AnswerVariant.FALSE} onClick={buttonClickHandler}>
                false
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </Container>
      <RestartButton action={tryAgain} isDark />
    </PageWrapper>
  );
};

export default QuizPage;
