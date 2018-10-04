import { call, put } from 'redux-saga/effects';

import Api from '../../../api';
import { fetchContactsRejected, fetchContactsFulfilled } from '../../actions';

export default function* fetchContact(action) {
  try {
    const response = yield call(Api.fetchContacts);
    yield put(fetchContactsFulfilled(response));
  } catch (e) {
    yield put(fetchContactsRejected(e));
  }
}
