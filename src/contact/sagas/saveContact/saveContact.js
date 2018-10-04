import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import Api from '../../../api';
import { saveContactRejected, saveContactFulfilled } from '../../actions';

export default function* fetchContact(action) {
  try {
    const response = yield call(Api.saveContact, action.payload.contact);
    yield put(saveContactFulfilled(response));
    yield put(push('/'));
  } catch (e) {
    yield put(saveContactRejected(e));
  }
}
