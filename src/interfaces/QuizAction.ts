import { Question } from './Question';
import AnswerVariant from '../enums/AnswerVariant';

export interface QuizAction {
  type: string;
  questions: Array<Question>;
  count: number;
  id: string;
  index: number;
  answer: AnswerVariant;
}
