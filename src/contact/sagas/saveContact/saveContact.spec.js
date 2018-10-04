import Api from '../../../api';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { push } from 'connected-react-router';
import {
  saveContact as saveContactActionCreator,
  saveContactRejected,
  saveContactFulfilled
} from '../../actions';

import saveContact from './saveContact';

describe('save contact', () => {
  const contact = {
    firstName: 'Else',
    lastName: 'daasd',
    phone: '745-139-4032',
    email: 'Virginia58@hotmail.com'
  };
  const action = saveContactActionCreator(contact);
  const generator = cloneableGenerator(saveContact)(action);

  it('calls saveContact API', () => {
    const expectedValue = call(Api.saveContact, contact);
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
      const expectedValue = put(saveContactFulfilled(response));
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
      expect(result).toEqual(put(saveContactRejected(error)));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
