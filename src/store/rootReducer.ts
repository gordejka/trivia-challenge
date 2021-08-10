import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import quizReducer from './quiz/quizReducer';
import rootWatcher from './rootSaga';
import appReducer from './application/appReducer';
import startFormReducer from './startForm/startFormReducer';
import { RootState } from '../interfaces/RootState';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  quiz: quizReducer,
  app: appReducer,
  startForm: startFormReducer,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<RootState> = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootWatcher);
export default store;
