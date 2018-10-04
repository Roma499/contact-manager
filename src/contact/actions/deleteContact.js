export function deleteContact(id) {
  return { type: 'DELETE_CONTACT', payload: { id: id } };
}
export function deleteContactFulfilled(response) {
  return { type: 'DELETE_CONTACT_FULFILLED', payload: response };
}
export function deleteContactRejected(error) {
  return { type: 'DELETE_CONTACT_REJECTED', message: error.message };
}
