import { Question } from './Question';

export interface QuizState {
  questions: Array<Question>;
  isFetched: boolean;
  questionsCount: number;
  answeredQuestionsCount: number;
  currentQuestion: Question | undefined;
  hasError: boolean;
}
