import axios from 'axios';

axios.defaults.baseURL = 'https://6447a0ba50c25337442a0ee2.mockapi.io';

export async function fetchContacts() {
  const { data } = axios.get('/contacts');
  return data;
}

export async function createContact(contact) {
  const { data } = axios({
    method: 'post',
    url: `/contacts`,
    data: contact,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = axios({
    method: 'delete',
    url: `/contacts${id}`,
  });
  return data;
}
