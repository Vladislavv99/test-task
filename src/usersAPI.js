import axios from 'axios';

axios.defaults.baseURL = 'https://649be1de0480757192371065.mockapi.io';

export const fetchUsers = async params => {
  const users = await axios.get(params);
  return users.data;
};
