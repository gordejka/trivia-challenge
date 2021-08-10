import { all } from 'redux-saga/effects';
import quizWatcher from './quiz/quizSaga';

function* rootWatcher() {
  yield all([quizWatcher()]);
}

export default rootWatcher;
