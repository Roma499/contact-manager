import { combineReducers } from 'redux';
import ContactReducer from './reducers/contact-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
	contactStore: ContactReducer,
	form: formReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
