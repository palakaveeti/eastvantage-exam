import React, { useEffect, useState } from 'react';
import { getRandomUser } from '../../utils/api-call';
import { randomUserEmailKey, randomUserNameKey } from '../../utils/keys';
import { CardContainer, NewUserButton } from './style';

const NameEmailCard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUserFromAPIAndLS = async () => {
      await getRandomUser();
      await getValuesFromLS();
    };
    getUserFromAPIAndLS();
  }, []);

  const getValuesFromLS = async () => {
    const userNameObjectFromLs = JSON.parse(
      await window.localStorage.getItem(randomUserNameKey)
    );
    const userEmailObjectFromLs = await window.localStorage.getItem(
      randomUserEmailKey
    );
    if (userEmailObjectFromLs && userEmailObjectFromLs) {
      setName(
        ` ${userNameObjectFromLs.title}. ${userNameObjectFromLs.first} ${userNameObjectFromLs.last}`
      );
      setEmail(` ${userEmailObjectFromLs}`);
    }
  };

  return (
    <CardContainer>
      <div>
        <strong>Full Name:</strong>
        {name}
      </div>
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <NewUserButton
        onClick={() => {
          getRandomUser();
          getValuesFromLS();
        }}
      >
        Get New User
      </NewUserButton>
    </CardContainer>
  );
};
export default NameEmailCard;
