import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducer/app';

const enhancer = EASY_ENV_IS_DEV && !EASY_ENV_IS_NODE ? (compose(applyMiddleware(thunk), (window.devToolsExtension ? window.devToolsExtension() : f => f)))
    : applyMiddleware(thunk);

export function makeStore(defaultState) {
    return createStore(combineReducers({ app: appReducer }), defaultState, enhancer);
}