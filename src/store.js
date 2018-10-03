import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import history from './history';

const middlewares = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), promise(), thunk)
);

const store = createStore(connectRouter(history)(rootReducer), compose(middlewares));

export default store;
