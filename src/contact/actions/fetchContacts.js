export function fetchContacts() {
  return { type: 'FETCH_CONTACTS' };
}
export function fetchContactsFulfilled(response) {
  return { type: 'FETCH_CONTACTS_FULFILLED', payload: response };
}
export function fetchContactsRejected(error) {
  return { type: 'FETCH_CONTACTS_REJECTED', message: error.message };
}
