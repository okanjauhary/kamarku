import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import appReducers from './reducers'

const middleware = applyMiddleware(logger, thunk, promise());

export default createStore(appReducers, middleware)