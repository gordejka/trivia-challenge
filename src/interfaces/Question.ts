import AnswerVariant from '../enums/AnswerVariant';

export interface Question {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: AnswerVariant;
  incorrect_answers: Array<string>;
  answer: AnswerVariant;
}
