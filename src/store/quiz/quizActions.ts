import {
  CLEAR_STORE,
  FETCHING_ERROR,
  FETCH_QUESTIONS,
  SET_ANSWERED_QUESTIONS_COUNT,
  SET_CURRENT_QUESTION,
  SET_QUESTION_ANSWER,
  SET_QUESTIONS,
  SET_QUESTIONS_COUNT,
  FIX_ERROR,
} from './quizActionTypes';
import { Question } from '../../interfaces/Question';

export const setQuestions = (questions: Array<Question>) => ({ type: SET_QUESTIONS, questions });
export const fetchQuestions = (amount: string, difficulty: string) => ({
  type: FETCH_QUESTIONS,
  amount,
  difficulty,
});
export const fetchingError = () => ({ type: FETCHING_ERROR });
export const setQuestionsCount = (count: number) => ({ type: SET_QUESTIONS_COUNT, count });
export const setAnsweredQuestionsCount = (count: number) => ({ type: SET_ANSWERED_QUESTIONS_COUNT, count });
export const setQuestionAnswer = (id: string, answer: string) => ({
  type: SET_QUESTION_ANSWER,
  id,
  answer,
});
export const setCurrentQuestion = (index: number) => ({ type: SET_CURRENT_QUESTION, index });
export const clearStore = () => ({ type: CLEAR_STORE });
export const fixError = () => ({ type: FIX_ERROR });
