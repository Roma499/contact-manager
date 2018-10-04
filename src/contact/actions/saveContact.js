export function saveContact(contact) {
  return { type: 'SAVE_CONTACT', payload: { contact: contact } };
}
export function saveContactFulfilled(response) {
  return { type: 'SAVE_CONTACT_FULFILLED', payload: response };
}
export function saveContactRejected(error) {
  return { type: 'SAVE_CONTACT_REJECTED', message: error.message };
}
