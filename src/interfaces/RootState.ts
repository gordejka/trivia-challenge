import { QuizState } from './QuizState';
import { AppState } from './AppState';
import { StartFormState } from './StartFormState';

export interface RootState {
  quiz: QuizState;
  app: AppState;
  startForm: StartFormState;
}
