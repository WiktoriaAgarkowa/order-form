import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger';

import rootSaga from './root-saga';

import rootReducer from './root-reducer';


const sagaMiddlware = createSagaMiddleware();

const middlewares = [logger, sagaMiddlware];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddlware.run(rootSaga)


export default store;