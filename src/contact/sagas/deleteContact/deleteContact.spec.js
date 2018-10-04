import Api from '../../../api';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { push } from 'connected-react-router';
import {
  deleteContact as deleteContactActionCreator,
  deleteContactRejected,
  deleteContactFulfilled
} from '../../actions';

import deleteContact from './deleteContact';

describe('delete contact', () => {
  const contactId = '10';
  const action = deleteContactActionCreator(contactId);
  const generator = cloneableGenerator(deleteContact)(action);

  it('calls deleteContact API', () => {
    const expectedValue = call(Api.deleteContact, contactId);
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
      const expectedValue = put(deleteContactFulfilled(response));
      const actual = clone.next(response).value;

      expect(actual).toEqual(expectedValue);
    });

    it('raises redirect action', () => {
      const result = clone.next().value;
      expect(result).toEqual(put(push('/')));
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
      expect(result).toEqual(put(deleteContactRejected(error)));
    });
    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
