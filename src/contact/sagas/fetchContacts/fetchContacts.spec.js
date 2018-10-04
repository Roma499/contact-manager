import Api from '../../../api';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import {
  fetchContacts as fetchContactsActionCreator,
  fetchContactsRejected,
  fetchContactsFulfilled
} from '../../actions';

import fetchContacts from './fetchContacts';

describe('fetch contacts', () => {
  const action = fetchContactsActionCreator();
  const generator = cloneableGenerator(fetchContacts)(action);

  it('calls fetchContacts API', () => {
    const expectedValue = call(Api.fetchContacts);
    const actual = generator.next().value;

    expect(actual).toEqual(expectedValue);
  });

  describe('and the request is successful', () => {
    let clone;

    beforeAll(() => {
      clone = generator.clone();
    });

    it('raises success action', () => {
      const response = [];
      const expectedValue = put(fetchContactsFulfilled(response));
      const actual = clone.next(response).value;

      expect(actual).toEqual(expectedValue);
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });

  describe('and request fails', () => {
    let clone;

    beforeAll(() => {
      clone = generator.clone();
    });

    it('raises failed action', () => {
      const error = new Error('404 Not Found');
      const result = clone.throw(error).value;
      expect(result).toEqual(put(fetchContactsRejected(error)));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
