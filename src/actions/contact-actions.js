import { http } from '../axios.config';

const url = '/contacts';

export function fetchContacts() {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_CONTACTS',
			payload: http.get(url),
		});
	};
}

export function createContact() {
	return (dispatch) => {
		dispatch({
			type: 'CREATE_CONTACT',
		});
	};
}

export function saveContact(contact) {
	return dispatch => dispatch({
		type: 'SAVE_CONTACT',
		payload: http.post(url, contact),
	});
}

export function fetchContact(id) {
	return dispatch => dispatch({
		type: 'FETCH_CONTACT',
		payload: http.get(`${url}/${id}`),
	});
}

export function updateContact(contact) {
	return dispatch => dispatch({
		type: 'UPDATE_CONTACT',
		payload: http.put(`${url}/${contact.id}`, contact),
	});
}

export function deleteContact(id) {
	return dispatch => dispatch({
		type: 'DELETE_CONTACT',
		payload: http.delete(`${url}/${id}`),
	});
}
