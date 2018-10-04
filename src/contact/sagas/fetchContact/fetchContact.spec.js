import Api from '../../../api';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { push } from 'connected-react-router';
import {
  fetchContact as fetchContactActionCreator,
  fetchContactRejected,
  fetchContactFulfilled
} from '../../actions';

import fetchContact from './fetchContact';

describe('fetch contact', () => {
  const contactId = '10';
  const action = fetchContactActionCreator(contactId);
  const generator = cloneableGenerator(fetchContact)(action);

  it('calls fetchContact API', () => {
    const expectedValue = call(Api.fetchContact, contactId);
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
      const expectedValue = put(fetchContactFulfilled(response));
      const actual = clone.next(response).value;

      expect(actual).toEqual(expectedValue);
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });

  describe('and the request fails', () => {
    let clone;

    beforeAll(() => {
      clone = generator.clone();
    });

    it('raises failed action', () => {
      const error = new Error('404 Not Found');
      const result = clone.throw(error).value;
      expect(result).toEqual(put(fetchContactRejected(error)));
    });
    it('raises redirect action', () => {
      const result = clone.next().value;
      expect(result).toEqual(put(push('/404')));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
