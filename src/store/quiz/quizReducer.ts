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
import { QuizState } from '../../interfaces/QuizState';
import { QuizAction } from '../../interfaces/QuizAction';

const initialState: QuizState = {
  questions: [],
  isFetched: true,
  questionsCount: 0,
  answeredQuestionsCount: 1,
  currentQuestion: undefined,
  hasError: false,
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        isFetched: true,
      };
    case SET_QUESTIONS_COUNT:
      return {
        ...state,
        questionsCount: action.count,
      };
    case SET_ANSWERED_QUESTIONS_COUNT:
      return {
        ...state,
        answeredQuestionsCount: action.count,
      };
    case SET_QUESTION_ANSWER:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.id === action.id) {
            return { ...question, answer: action.answer };
          }
          return { ...question };
        }),
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: { ...state.questions[action.index] },
      };
    case FETCH_QUESTIONS:
      return {
        ...state,
        isFetched: false,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        hasError: true,
        isFetched: true,
      };
    case CLEAR_STORE:
      return { ...initialState };
    case FIX_ERROR:
      return {
        ...state,
        hasError: false,
      };
    default:
      return state;
  }
};

export default quizReducer;
