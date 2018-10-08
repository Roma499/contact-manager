import { combineReducers } from 'redux';
import ContactReducer from './contact/contact.reducer';
import FreeTimeReducer from './freeTime/freeTime.reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  form: formReducer,
  freeTimeStore: FreeTimeReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
