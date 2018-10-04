export function fetchContact(id) {
  return { type: 'FETCH_CONTACT', payload: { id: id } };
}
export function fetchContactFulfilled(response) {
  return { type: 'FETCH_CONTACT_FULFILLED', payload: response };
}
export function fetchContactRejected(error) {
  return { type: 'FETCH_CONTACT_REJECTED', message: error.message };
}
