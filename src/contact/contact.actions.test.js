import configureMockStore from 'redux-mock-store';
import { fetchContact, url } from './contact.actions';
import { http } from '../axios.config';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { push } from 'connected-react-router';

describe('contact actions', () => {
  let store;
  let httpMock;

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(http);
    const mockStore = configureMockStore([promise(), thunk]);
    store = mockStore({});
  });

  it('fetchContact should be completed', async () => {
    const contactId = '10';
    const requestUrl = `${url}/${contactId}`;

    httpMock.onGet(requestUrl).reply(200, []);

    store.dispatch({
      type: 'FETCH_CONTACT',
      payload: http.get(requestUrl)
    });
    await flushAllPromises();
    const expectedActions = store.getActions();
    store.clearActions();

    fetchContact(contactId)(store.dispatch);
    await flushAllPromises();

    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });

  it('fetchContact should be failed', async () => {
    const contactId = '10';
    const requestUrl = `${url}/${contactId}`;

    httpMock.onGet(requestUrl).reply(404);

    store
      .dispatch({
        type: 'FETCH_CONTACT',
        payload: http.get(requestUrl)
      })
      .catch(() => {
        store.dispatch(push('/404'));
      });

    await flushAllPromises();

    const expectedActions = store.getActions();
    store.clearActions();

    fetchContact(contactId)(store.dispatch);
    await flushAllPromises();

    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});
