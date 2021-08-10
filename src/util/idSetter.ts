import { v4 as uuidv4 } from 'uuid';
import { Question } from '../interfaces/Question';

const idSetter = (question: Question): Question => {
  return { ...question, id: uuidv4() };
};

export default idSetter;
