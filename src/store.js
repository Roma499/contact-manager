import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import registerWithMiddleware from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducer';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)));

const store = createStore(createRootReducer(history), compose(middlewares));

registerWithMiddleware(sagaMiddleware);

export default store;
