import StartPage from '../../pages/startPage/StartPage';
import QuizPage from '../../pages/quizPage/QuizPage';
import ResultsPage from '../../pages/resultsPage/ResultsPage';
import SET_PAGE from './appActionTypes';
import PageUrl from '../../enums/PageUrl';
import { AppState } from '../../interfaces/AppState';
import { AppAction } from '../../interfaces/AppAction';

const initialState: AppState = {
  pages: new Map([
    [PageUrl.START_PAGE, StartPage],
    [PageUrl.QUIZ_PAGE, QuizPage],
    [PageUrl.RESUlTS_PAGE, ResultsPage],
  ]),
  currentPage: PageUrl.START_PAGE,
};

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.pageUrl,
      };
    default:
      return state;
  }
};

export default appReducer;
