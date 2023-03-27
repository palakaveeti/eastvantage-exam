import axios from 'axios';
import { randomUserEmailKey, randomUserNameKey } from './keys';

export const getRandomUser = async () => {
  try {
    const result = await axios.get('https://randomuser.me/api');
    const userName = result.data.results[0].name;
    window.localStorage.setItem(randomUserNameKey, JSON.stringify(userName));
    const userEmail = result.data.results[0].email;
    window.localStorage.setItem(randomUserEmailKey, userEmail);
  } catch (error) {
    console.log('error', error.message);
  }
};
