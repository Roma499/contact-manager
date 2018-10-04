import Api from '../../../api';
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { goBack } from 'connected-react-router';
import {
  updateContact as updateContactActionCreator,
  updateContactRejected,
  updateContactFulfilled
} from '../../actions';

import updateContact from './updateContact';

describe('update contact', () => {
  const contact = {
    id: 8,
    firstName: 'Else',
    lastName: 'daasd',
    phone: '745-139-4032',
    email: 'Virginia58@hotmail.com'
  };
  const action = updateContactActionCreator(contact);
  const generator = cloneableGenerator(updateContact)(action);

  it('calls updateContact API', () => {
    const expectedValue = call(Api.updateContact, contact);
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
      const expectedValue = put(updateContactFulfilled(response));
      const actual = clone.next(response).value;

      expect(actual).toEqual(expectedValue);
    });
    it('raises redirect action', () => {
      const result = clone.next().value;
      expect(result).toEqual(put(goBack()));
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
      expect(result).toEqual(put(updateContactRejected(error)));
    });

    it('performs no further work', () => {
      const result = clone.next().done;
      expect(result).toBe(true);
    });
  });
});
