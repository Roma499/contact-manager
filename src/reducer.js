import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ContactReducer from './contact/contact.reducer';
import FreeTimeReducer from './freeTime/freeTime.reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  form: formReducer,
  freeTimeStore: FreeTimeReducer
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });
