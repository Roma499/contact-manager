import { http } from '../axios.config';
import { push, goBack } from 'connected-react-router';

export const url = '/contacts';

export function fetchContacts() {
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: http.get(url)
    });
  };
}

export function saveContact(contact) {
  return dispatch =>
    dispatch({
      type: 'SAVE_CONTACT',
      payload: http.post(url, contact)
    }).then(resp => dispatch(push('/')));
}

export function fetchContact(id) {
  return dispatch =>
    dispatch({
      type: 'FETCH_CONTACT',
      payload: http.get(`${url}/${id}`)
    }).catch(error => dispatch(push('/404')));
}

export function updateContact(contact) {
  return dispatch =>
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: http.put(`${url}/${contact.id}`, contact)
    }).then(resp => dispatch(goBack()));
}

export function deleteContact(id) {
  return dispatch =>
    dispatch({
      type: 'DELETE_CONTACT',
      payload: http.delete(`${url}/${id}`)
    }).then(resp => dispatch(push('/')));
}
