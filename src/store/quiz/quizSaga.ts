import { call, put, takeEvery } from 'redux-saga/effects';
import getQuestions from '../../api/api';
import { fetchingError, setCurrentQuestion, setQuestions, setQuestionsCount } from './quizActions';
import { FETCH_QUESTIONS } from './quizActionTypes';
import idSetter from '../../util/idSetter';
import { Question } from '../../interfaces/Question';
import stringToHtmlDecode from '../../util/stringToHtmlDecode';
import { StartFormData } from '../../interfaces/StartFormData';
import { ApiResponse } from '../../interfaces/ApiResponse';

function* questionsWorker(action: StartFormData) {
  try {
    const response: ApiResponse = yield call(getQuestions, action.amount, action.difficulty);
    const resultsWithIds: Array<Question> = yield response.results.map((question: Question) => {
      return idSetter({ ...question, question: stringToHtmlDecode(question.question) });
    });
    yield put(setQuestions(resultsWithIds));
    yield put(setCurrentQuestion(0));
    yield put(setQuestionsCount(response.results.length));
  } catch (e) {
    yield put(fetchingError());
  }
}

export default function* questionsWatcher() {
  yield takeEvery(FETCH_QUESTIONS, questionsWorker);
}
