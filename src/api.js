import { http } from './axios.config';

export const url = '/contacts';

const Api = {
  fetchContacts: () => http.get(url),
  saveContact: contact => http.post(url, contact),
  fetchContact: id => http.get(`${url}/${id}`),
  updateContact: contact => http.put(`${url}/${contact.id}`, contact),
  deleteContact: id => http.delete(`${url}/${id}`)
};
export default Api;
