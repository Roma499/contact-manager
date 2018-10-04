import { takeEvery } from 'redux-saga/effects';
import fetchContact from './fetchContact/fetchContact';
import fetchContacts from './fetchContacts/fetchContacts';
import saveContact from './saveContact/saveContact';
import updateContact from './updateContact/updateContact';
import deleteContact from './deleteContact/deleteContact';

export function* mySaga() {
  yield takeEvery('FETCH_CONTACT', fetchContact);
  yield takeEvery('FETCH_CONTACTS', fetchContacts);
  yield takeEvery('SAVE_CONTACT', saveContact);
  yield takeEvery('UPDATE_CONTACT', updateContact);
  yield takeEvery('DELETE_CONTACT', deleteContact);
}
