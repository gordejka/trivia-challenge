import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Question } from '../../interfaces/Question';
import QuestionResultCard from '../../components/questionResultCard/QuestionResultCard';
import WrapperType from '../../enums/WrapperType';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import Container from '../../components/common/container/Container';
import classes from './resultPage.module.scss';
import Button from '../../components/common/button/Button';
import ButtonStyle from '../../enums/ButtonStyle';
import PageUrl from '../../enums/PageUrl';
import { clearStore } from '../../store/quiz/quizActions';
import Score from '../../components/score/Score';
import avatar from '../../assets/images/avatar.svg';
import RatingBar from '../../components/ratingBar/RatingBar';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { RootState } from '../../interfaces/RootState';
import RestartButton from '../../components/restartButton/RestartButton';
import classNames from '../../util/classNames';

const ResultsPage: FC = () => {
  const { questions, questionsCount } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();
  const { push: historyPush } = useHistory();

  const answersWrapperClassName = useMemo(() => {
    if (questionsCount > 5) {
      return classNames([classes.questionsListWrapper, classes.activeScroll]);
    }
    return classes.questionsListWrapper;
  }, [questionsCount]);

  const questionsList = useMemo(() => {
    return questions.map((question: Question) => {
      return (
        <QuestionResultCard
          question={question.question}
          answer={question.answer}
          key={question.id}
          correctAnswer={question.correct_answer}
        />
      );
    });
  }, [questions]);

  const correctAnswersCount = useMemo(() => {
    return questions.reduce((accumulator: number, currentValue: Question) => {
      if (currentValue.answer === currentValue.correct_answer) {
        return +accumulator + 1;
      }
      return +accumulator;
    }, 0);
  }, [questions]);

  const tryAgain = useCallback(() => {
    dispatch(clearStore());
    historyPush(PageUrl.START_PAGE);
  }, [dispatch, historyPush]);

  return (
    <PageWrapper wrapperType={WrapperType.RESULT_PAGE}>
      <Container>
        <ContentWrapper>
          <div className={classes.wrapper}>
            <div className={classes.scoreWrapper}>
              <img src={avatar} alt='' />
              <div>
                <div className={classes.scoreText}>You scored</div>
                <Score firstValue={correctAnswersCount} secondValue={questionsCount} wrapperType={WrapperType.QUIZ_PAGE} />
              </div>
            </div>
            <div className={classes.ratingWrapper}>
              <RatingBar correctAnswers={correctAnswersCount} totalQuestions={questionsCount} />
            </div>
            <div className={answersWrapperClassName}>{questionsList}</div>
            <div className={classes.buttonWrapper}>
              <Button buttonStyle={ButtonStyle.GRADIENT} onClick={tryAgain}>
                Try again
              </Button>
            </div>
          </div>
        </ContentWrapper>
      </Container>
      <RestartButton action={tryAgain} />
    </PageWrapper>
  );
};

export default ResultsPage;
