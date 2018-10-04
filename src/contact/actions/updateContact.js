export function updateContact(contact) {
  return { type: 'UPDATE_CONTACT', payload: { contact: contact } };
}
export function updateContactFulfilled(response) {
  return { type: 'UPDATE_CONTACT_FULFILLED', payload: response };
}
export function updateContactRejected(error) {
  return { type: 'UPDATE_CONTACT_REJECTED', message: error.message };
}
