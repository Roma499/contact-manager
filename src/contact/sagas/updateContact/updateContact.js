import { call, put } from 'redux-saga/effects';
import { goBack } from 'connected-react-router';

import Api from '../../../api';
import { updateContactRejected, updateContactFulfilled } from '../../actions';

export default function* fetchContact(action) {
  try {
    const response = yield call(Api.updateContact, action.payload.contact);
    yield put(updateContactFulfilled(response));
    yield put(goBack());
  } catch (e) {
    yield put(updateContactRejected(e));
  }
}
